from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import MyUser, Profile  # Import your custom user model
import csv
from django.http import HttpResponse

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
    
    actions = ['export_to_csv']
    
    def export_to_csv(UserAdmin, request, queryset):
        response = HttpResponse(content_type='text/csv')
        filename = "users.csv"
        response['Content-Disposition'] = f'attachment; filename="{filename}"'
        writer = csv.writer(response)
        writer.writerow(["Username", "Email", "isAlum", "isVerified"])
        for user in queryset:
            if user.is_active and not user.is_alum:
                try:
                    profile = Profile.objects.get(user=user)
                except Profile.DoesNotExist:
                    profile = None
                if profile:
                    user_name = profile.fullname
                else:
                    user_name = "Student"
                writer.writerow([user_name, user.username, user.is_alum, user.is_active])
        return response
    
    export_to_csv.short_description = "Export users to CSV"

# Register your custom user model with the custom admin class
admin.site.register(MyUser, MyUserAdmin)
admin.site.register(Profile)
