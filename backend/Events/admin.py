# events/admin.py
from django.contrib import admin
from .models import Event, Speaker, OtherDetails


admin.site.register(Event)
admin.site.register(Speaker)
admin.site.register(OtherDetails)
