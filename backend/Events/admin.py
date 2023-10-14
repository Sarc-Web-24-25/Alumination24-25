# events/admin.py
from django.contrib import admin
from .models import Event, Speaker, OtherDetails
from django.http import HttpResponse
import csv
from Authentication.models import Profile


class EventAdmin(admin.ModelAdmin):
    actions = ['export_to_csv']
    
    def export_to_csv(modeladmin, request, queryset):
        for event in queryset:
            response = HttpResponse(content_type='text/csv')
            filename = f"{event.name}_applicants.csv"
            response['Content-Disposition'] = f'attachment; filename="{filename}"'
            writer = csv.writer(response)
            header = [
                'Name', 'Rollno', 'Email', 'Phone', 'Department', 'Program', 'Graduation Year' , 'Preferred Date', 'Field Preference 1', 'Field Preference 2', 'Field Preference 3'
            ]
            writer.writerow(header)
            for applicant in event.applicants.all():
                profile = Profile.objects.get(user=applicant)
                try:
                    other_details = OtherDetails.objects.get(user=applicant, event=event)
                except OtherDetails.DoesNotExist:
                    other_details = None
                
                pref_date = "" if other_details is None else other_details.pref_date
                field_pref1 = "" if other_details is None else other_details.field_pref1
                field_pref2 = "" if other_details is None else other_details.field_pref2
                field_pref3 = "" if other_details is None else other_details.field_pref3
                
                writer.writerow([
                    profile.fullname, profile.rollno, applicant.username, profile.phoneno, profile.department, profile.program, profile.graduation_year, pref_date, field_pref1, field_pref2, field_pref3
                ])
        return response
    
    export_to_csv.short_description = "Export selected event's applicants to CSV"


admin.site.register(Event, EventAdmin)
admin.site.register(Speaker)
admin.site.register(OtherDetails)
