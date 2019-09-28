from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(User)
# Register your models here.
admin.site.register(UploadFile)
# Register your models here.
admin.site.register(Playurls)
# Register your models here.
admin.site.register(Comment)
class PlaysAdmin(admin.ModelAdmin):
    search_fields = ('name', 'lx')
admin.site.register(Plays,PlaysAdmin)

# Register your models here.
admin.site.register(Record)