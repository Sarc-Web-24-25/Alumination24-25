from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import MyUser, Profile  # Import your custom user model

class MyUserAdmin(UserAdmin):
    # Add customizations to the user admin page here
    list_display = ('username', 'email', 'is_alum', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active')

    fieldsets = (
        (None, {'fields': ('username', 'email', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active',
         'is_superuser', 'groups', 'user_permissions')}),
        ('Custom Fields', {'fields': ('is_alum',)}),
    )

# Register your custom user model with the custom admin class
admin.site.register(MyUser, MyUserAdmin)
admin.site.register(Profile)
