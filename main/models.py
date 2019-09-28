from django.db import models

# Create your models here.
class User(models.Model):
  uname = models.CharField(max_length=30,null=False,db_index=True,verbose_name='用户名')
  uphone=models.CharField(max_length=11,null=False,unique=True,verbose_name='手机号')
  upwd = models.CharField(max_length=100,null=False,verbose_name='密码')
  isActive = models.BooleanField(default=True)

  #重写 __str__() 函数
  def __str__(self):
    return self.uname

  #通过内部类Meta修改在后台的展现形式
  class Meta:
    db_table = "user"
    verbose_name = '用户'
    verbose_name_plural = verbose_name


class UploadFile(models.Model):
  """
  上传文件
  """
  user = models.CharField(max_length=30,verbose_name='用户名') # 上传的用户名或id
  file = models.FileField(upload_to='./upload/',verbose_name='上传的文件') # 上传的文件
  date = models.DateTimeField(auto_now_add=True,verbose_name='上传时间') # 上传时间

  # 通过内部类Meta修改在后台的展现形式
  class Meta:
    db_table = "upload"
    verbose_name = '上传文件'
    verbose_name_plural = verbose_name

  def __str__(self):
    return str(self.user)

class Plays(models.Model):
  """
  视频播放文件
  """
  name = models.CharField(max_length=30,db_index=True,verbose_name='视频名称')
  short_desc = models.CharField(max_length=30,verbose_name='集数')
  # region = models.CharField(max_length=10,verbose_name='地区')
  tags = models.CharField(max_length=30,verbose_name='类型')
  director = models.CharField(max_length=20,verbose_name='导演')
  stars = models.CharField(max_length=100,verbose_name='主演')
  description = models.CharField(max_length=1000,verbose_name='简介')
  play_time = models.CharField(max_length=10,verbose_name='时长')
  img = models.CharField(max_length=200,verbose_name='图片路径')
  hot = models.CharField(max_length=10,verbose_name='热度播放量')
  score = models.CharField(max_length=30,null=True,verbose_name='分数')
  play_url = models.CharField(max_length=100,null=True,verbose_name='播放路径')
  alias = models.CharField(max_length=30,null=True,verbose_name='别名')
  lx = models.CharField(max_length=30,verbose_name='种类')
  # 通过内部类Meta修改在后台的展现形式
  class Meta:
    db_table = "plays"
    verbose_name = '视频文件'
    verbose_name_plural = verbose_name

  def __str__(self):
    return str(self.name)

class Playurls(models.Model):
  """
  视频播放文件
  """
  play_name = models.CharField(max_length=30,db_index=True,verbose_name='视频名称集数')
  play_url = models.CharField(max_length=100,verbose_name='视频地址')

  # 通过内部类Meta修改在后台的展现形式
  class Meta:
    db_table = "playurls"
    verbose_name = '视频文件地址'
    verbose_name_plural = verbose_name

  def __str__(self):
    return str(self.play_name)

class Comment(models.Model):
  name = models.CharField(max_length=30, db_index=True, verbose_name='姓名')
  content = models.CharField(max_length=1000, verbose_name='内容')
  name_pf = models.CharField(max_length=30, null=True, verbose_name='电影评分')
  create_time = models.DateTimeField(verbose_name='创建时间', auto_now_add=True)

  class Meta:
    db_table = "comment"
    verbose_name = '用户评论'
    verbose_name_plural = verbose_name

  def __str__(self):
    return self.name

class Record(models.Model):
  name = models.CharField(max_length=30, db_index=True, verbose_name='姓名')
  img = models.CharField(max_length=200, verbose_name='图片路径')
  playname = models.CharField(max_length=30, verbose_name='视频名称')
  name_pf = models.CharField(max_length=30,verbose_name='用户评分')

  class Meta:
    db_table = "record"
    verbose_name = '播放记录'
    verbose_name_plural = verbose_name

  def __str__(self):
    return self.name


