#!/usr/bin/python
# coding:utf-8
import urllib, json
import urllib.parse
import urllib.request
import random



def code():
    s = ''
    for i in range(4):
        m = random.randint(1,9)
        s += str(m)
    return s
mz2 = 0
def main(uphone):
    mz1 = code()
    global mz2
    mz2 = mz1
    print(mz2)
    appkey = 'a5e30297f9e205574b3c4df922b733c8'  # 您申请的短信服务appkey
    mobile = uphone  # 短信接受者的手机号码
    tpl_id = '141056'  # 申请的短信模板ID,根据实际情况修改 
    tpl_value = '#code#=' + mz2 + '&#company#=NaBula'  # 短信模板变量,根据实际情况修改
    print('main',mz2)
    sendsms(appkey, mobile, tpl_id, tpl_value)  # 请求发送短信

    return mz2

def sendsms(appkey, mobile, tpl_id, tpl_value):
    sendurl = 'http://v.juhe.cn/sms/send'  # 短信发送的URL,无需修改 

    params = 'key=%s&mobile=%s&tpl_id=%s&tpl_value=%s' % (appkey, mobile, tpl_id, urllib.parse.quote(tpl_value))  # 组合参数

    wp = urllib.request.urlopen(sendurl + "?" + params)
    content = wp.read()  # 获取接口返回内容

    result = json.loads(content)

    if result:
        error_code = result['error_code']
        if error_code == 0:
            # 发送成功
            smsid = result['result']['sid']
            print("sendsms success,smsid: %s" % (smsid))
        else:
            # 发送失败
            print("sendsms error :(%s) %s" % (error_code, result['reason']))
    else:
        # 请求失败
        print("request sendsms error")

#
# if __name__ == '__main__':
#     main()
