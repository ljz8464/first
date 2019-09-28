from django.conf.urls import url
from . import views
urlpatterns = [
  url(r'^$',views.index),
  url(r'^login/$',views.login,name='login'),
  url(r'^logout/$',views.logout,name='logout'),
  url(r'^register/$',views.register,name='register'),
  url(r'^register_dx/$',views.register_dx,name='register_dx'),
  url(r'^upload/$',views.upload,name='upload'),
  url(r'^uploadok/$',views.uploadok,name='uploadok'),
  url(r'^play-(.*)/', views.play,name='play'),
  #*****************************************************************************
  url(r'^Password_change-(.*)/$',views.Password_change,name='Password_change'),
  # 搜索结果页
  url(r'^searchresult/$', views.searchresult,name='searchresult'),
  # 列表页
  url(r'^listpage-(.*)/$', views.listpage,name='listpage'),
  # 电视剧简介
  url(r'^select/$', views.select,name='select'),
  # 主页/忘记密码

  url(r'^jifen/$',views.jifen_views),
  url(r'^bofangjilu/$',views.bofangjilu_views),
  url(r'^zhuiju/$',views.zhuiju_views),
  url(r'^shezhi/$',views.shezhi_views),
  url(r'^kongjian/$',views.kongjian_views),
  url(r'^xiaoxi/$',views.xiaoxi_views),
  url(r'^chuangzuo/$',views.chuangzuo_views),
  url(r'^changepwd/$',views.changepwd_views),
  url(r'^safeindex/$',views.safeindex_views),
  url(r'^safecenter/$',views.safecenter_views),
  url(r'^querenzhanghao/$',views.querenzhanghao_views),
  url(r'^chenggongxiugai/$',views.chenggongxiugai_views),

  # 推荐路由
  url(r'^recommend/$',views.recommend),
]

