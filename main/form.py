from django import forms
from .models import *

class LoginForm(forms.ModelForm):
  class Meta:
    model = User
    fields = ["uphone","upwd"]
    labels = {
      'uphone':'手机号',
      'upwd':'密码',
    }
    widgets = {
      'uphone':forms.TextInput(
        attrs={
          'placeholder':'手机号/用户名',
          'class': 'uinput',
        }
      ),
      'upwd':forms.PasswordInput(
        attrs = {
          'placeholder':'请输入6-20位字符',
          'class': 'uinput'
        }
      )
    }

class RemarkForm(forms.ModelForm):
  class Meta:
    model = Comment
    fields = ["content",]
    labels = {
      'content':'内容',
    }
    widgets = {
      'content':forms.Textarea(
        attrs={
          'placeholder':'快来说说想法吧～',
          'data-maxlength': '300',
          'id': 'reviewww',
          'class': 'form-control',
        }
      )
    }
