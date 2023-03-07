from pprint import pprint
from django.contrib import admin
from loguru import logger as l
from .models import *
from .forms import *


class ProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'user_id', 'first_name', 'username', 'role')
    search_fields = ('user_id', 'first_name', 'username', 'role')
    list_editable = ('user_id', 'first_name', 'username', 'role')
    list_filter = ('id', 'user_id', 'first_name', 'username', 'role')

    def get_fields(self, obj, request): 
        return [] 


class RoleAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'active_user', 'code', 'role')
    search_fields = ('id', 'code', 'role')
    list_editable = ('user', 'active_user', 'code', 'role') 
    list_filter = ('id', 'user', 'active_user', 'code', 'role') 

    def get_fields(self, request, obj): 
        return ["code", "role"] 

    def save_model(self, request, obj, form, change):
        obj.user = Profile.objects.all().first()
        obj.save()


admin.site.register(Profile, ProfileAdmin)
admin.site.register(RoleCode, RoleAdmin)