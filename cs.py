import json
import numpy as np
import pandas as pd
import pymysql


# 从数据库中读取所有用户的评分及观看记录
db = pymysql.connect("114.115.170.135","root","My123456!","nbdb")
cursor = db.cursor()
cursor.execute('select * from record')  #执行SQL查询
data = cursor.fetchall()
# record_dic = {'uname':'轲大帅气','uimg':'//puui.qpic.cn/vcover_vt_pic/0/qab156ofmrj45xy1513663798/220','filename':'解忧杂货店','filepf':'9'}
uname = '用户名'
uimg = '图片'
filename = '视屏名'
filepf = '视屏评分'
record_dic = {}
record_dic2 = {}
for a, b, c, d, e in data:
    record_dic[d] = e
    record_dic2[b] = record_dic
print(record_dic2)