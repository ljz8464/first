#coding=utf8
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.shortcuts import render, redirect, render_to_response
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.urls import reverse
from django.utils.safestring import mark_safe
from django.views.decorators.csrf import csrf_exempt

from .models import *
from django.contrib import auth
from .form import *
import os
from django.utils import timezone
from django.contrib import messages
import logging
from dxyz import dx
import re
import json
import pymysql

#主页面
def index(request):
    return render(request,'index.html')

#登录
def login(request):
    form = LoginForm()
    if request.method == 'GET':
        return render(request, 'demo.html', locals())
    else:
        # 接收uphone 和 upwd 并验证
        uphone = request.POST['uphone']
        upwd = request.POST['upwd']
        users = User.objects.filter(uphone=uphone, upwd=upwd)
        if users:
            request.session['username'] = uphone
            return redirect('/')
        else:
            message = '用户名或密码错误'
            return render(request, 'demo.html', locals())

#登录注销
def logout(request):
    del request.session['username']
    return redirect('/')

#注册
def register(request):
    # 判断请求方式:
    # GET:去往 register.html
    # POST:接收请求数据并提交给数据库
    if request.method == 'GET':
        return render(request, 'register.html')
    else:
        # 接收前端请求提交的数据
        uname = request.POST['uname']
        try:
            olduser = User.objects.filter(uname=uname)
            if len(olduser) > 0:
                return render(request, 'register.html', {'message': '用户名已经存在'})
        except Exception as e:
            logging.warning(e)
        if request.POST['upwd'] != request.POST['upwd_2']:
            return render(request, 'register.html', {'message': '两次输入的密码不一致'})
        upwd = request.POST['upwd']
        uphone = request.POST['uphone']
        users = User.objects.filter(uphone=uphone)
        if users:
            return render(request, 'register.html', {'message': '号码已经存在'})
        ucode = request.POST['ucode']
        md = dx.mz2
        if str(md) != ucode:
            return render(request, 'register.html', {'message': '验证码错误'})
        # 构建实体对象,并保存回数据库
        user = User()
        user.uphone = uphone
        user.upwd = upwd
        user.uname = uname
        user.save()
        return redirect('/login/')

#注册-处理
def register_dx(request):
    if request.method == 'GET':
        uphone = request.GET['uphone']
        print(uphone)
        uphone = str(uphone)
        dx.main(uphone)
        return HttpResponse("")

#上传
def upload(request):
    if request.method == 'GET':
        try:
            username = request.session['username']
            return render(request, 'upload.html')
        except:
            pd = 'sc'
            return render(request, 'uploadokon.html', locals())
    else:
        return render(request, 'uploadokon.html')

#上传-处理
def uploadok(request):
    if request.method == 'POST':
        #视频名称s
        obj = request.FILES.get('fafafa')
        username = request.session['username']
        file_path = os.path.join('upload',obj.name)
        with open(file_path, 'wb')as f:
            for chunk in obj.chunks():
                f.write(chunk)
        # time_now = timezone.now().strftime("%Y-%m-%d %T")
        # 写入数据库
        upload = UploadFile()
        upload.user = username
        upload.file = obj.name
        upload.save()
        return render(request, 'uploadok.html')

# 定义视屏播放页视图函数
def play(request, name):
    # if request.method == 'GET':
    try:
        i = request.GET['v']
    except:
        i = '1'
    plays = Plays.objects.get(name=name)
    ts = plays.tags
    tsx = ts.split(',')
    region = tsx[0]
    tag = ''
    for ts in tsx[1:]:
        tag += ts + ' '
    # tag = tsx[1:]
    try:
        desc1 = plays.short_desc
        desc2 = int(re.sub("\D", "", desc1))
    except:
        desc2 = 1
    listb = [str(i) for i in range(1,desc2+1)]
    urli = '/play-' + name + '/?v='
    urls = Playurls.objects.filter(play_name__contains=name)
    urlm = ''
    spname = ''
    ii = 1
    for url in urls:
        if int(i) == ii:
            urlm = url.play_url
            spname = url.play_name
        ii += 1
    # 用户评论

    if request.method == 'POST':
        form = RemarkForm(request.POST)
        try:
            username = request.session['username']
        except:
            username = '匿名(未登录用户)'
        print('lai l ')
        fonts = request.POST.get("font")
        print(fonts)
        if form.is_valid():
            print(111111111111)
        else:
            myremark = Comment()
            myremark.name = username
            # myremark.content = form.cleaned_data['content']
            content = request.POST.get("count")
            myremark.content = content
            myremark.name_pf = fonts
            myremark.save()
            print('ok')
        # 记录
        record = Record()
        record.name = username
        record.img = plays.img
        record.playname = name
        record.name_pf = fonts
        record.save()
    form = RemarkForm()
    form = form
    ties = Comment.objects.order_by('-create_time')


    return render(request, 'playback_page.html', locals())


#*******************************************
#密码更改
def Password_change(request,num):
    if num == '1':
        if request.method == 'GET':
            m = 1
            return render(request, 'password_change.html',locals())
        else:
            uphone = request.POST['uphone']
            print(uphone)
            url = '/Password_change-2?uphone=' + uphone
            return redirect(url)
    elif num == '2':
        uphone = request.GET['uphone']
        if request.method == 'GET':
            try:
                message = request.GET['message']
            except:
                pass
            m = 2
            return render(request, 'password_change.html',locals())
        else:
            upwd1 = request.POST.get('upwd1')
            upwd2 = request.POST.get('upwd2')
            if upwd1 != upwd2:
                message = '两次输入的密码不一致'
                url = '/Password_change-2?message=' + message + '&uphone=' + uphone
                return redirect(url)
            ucode = request.POST['ucode']
            md = dx.mz2
            if str(md) != ucode:
                message = '验证码错误'
                url = '/Password_change-2?message=' + message + '&uphone=' + uphone
                return redirect(url)
            user = User.objects.filter(uphone=uphone)[0]
            user.upwd = upwd1
            user.save()
            return redirect('/Password_change-3/')
    elif num == '3':
        m = 3
        return render(request, 'password_change.html', locals())

#列表页
def listpage(request,lx):
    if lx == 'dsj':
        zl = '电视剧'
    elif lx == 'dy':
        zl = '电影'
    elif lx == 'kt':
        zl = '动漫'
    elif lx == 'se':
        zl = '少儿'
    elif lx == 'wj':
        zl = '网剧'
    else:
        zl = '纪录片'
    lists = Plays.objects.filter(lx=lx).order_by('-hot')
    return render(request, 'list_page.html', locals())

# 定义搜索框搜索结果页视图函数
def searchresult(request):
    try:
        search = request.session['target']
    except:
        search = request.GET.get('search', )
    ps = Plays.objects.filter(name__contains=search)
    if ps:
        dsj = '电视剧'
        dy = '电影'
        dm = '动漫'
        se = '少儿'
        wj = '网剧'
        jlp = '纪录片'
        return render(request, 'search_page.html', locals())
    else:
        url = 'https://so.youku.com/search_video/q_' + search
        return redirect(url)

def select(request):

    return render(request, 'select.html')




# 推荐页面视图函数
def recommend(request):
    # 定义历史记录电影名:h_name, 
    # 判断请求方式:
    # GET:去往 register.html
    # POST:接收请求数据并提交给数据库
    # if request.method == 'GET':
    #     return render(request, 'register.html')
    # else:
    #     pass






# 主页、忘记密码
def jifen_views(request):
    return render(request, 'jifen.html', locals())

def bofangjilu_views(request):
    return render(request, 'view_history.html', locals())

def zhuiju_views(request):
    return render(request, 'zhuiju.html', locals())

def shezhi_views(request):
    return render(request, 'gerenshezhi.html', locals())

def kongjian_views(request):
    return render(request, 'kongjian.html', locals())

def xiaoxi_views(request):
    return render(request, 'xiaoxi.html', locals())

def chuangzuo_views(request):
    return render(request, 'chuangzuo.html', locals())

def changepwd_views(request):
    return render(request, 'gerenshezhi/changepwd.html', locals())

def safeindex_views(request):
    return render(request, 'safeindex.html', locals())

def safecenter_views(request):
    return render(request, 'safecenter.html', locals())

def querenzhanghao_views(request):
    return render(request, 'querenzhanghao.html', locals())

def chongzhimima_views(request):
    return render(request,'chongzhimima.html',locals())

def chenggongxiugai_views(request):
    return render(request,'chenggongxiugai.html',locals())