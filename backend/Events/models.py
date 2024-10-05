from django.db import models
from django.utils.safestring import mark_safe
from PIL import Image
from Authentication.models import MyUser
from django.core.files import File
import io
from .options import FIELDS, DATES, FIELDS_GM, WORKSHOPS

def process_image(image_file, name, prefix):
    image = Image.open(image_file)
    if image.mode == "RGBA":
        image = image.convert("RGB")
    output = io.BytesIO()
    image.save(
        output, format="JPEG", optimize=True, quality=60
    )
    output.seek(0)
    output.name = prefix + str(name) + ".jpg"
    return File(output)


class Speaker(models.Model):
    fullname = models.CharField(max_length=255)
    profile_image = models.ImageField(upload_to='speaker_images/')
    description = models.TextField(default="", blank=True)
    event = models.ForeignKey('Event', related_name='event', on_delete=models.CASCADE, null=True, blank=True)
    
    def __str__(self):
        return self.fullname + " - " + self.event.name
    
    def save(self, *args, **kwargs):
        speaker = Speaker.objects.filter(id=self.id).first()
        if speaker and speaker.profile_image != self.profile_image:
            try:
                speaker.profile_image.delete(save=False)
            except Exception as e:
                print(e)
                
        if self.profile_image:
            self.profile_image = process_image(self.profile_image, self.fullname, "speaker_")
        super().save(*args, **kwargs)

class Event(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='event_images/')
    youtube_link = models.TextField(default="", blank=True)
    applicants = models.ManyToManyField(MyUser, related_name='applied_events', blank=True)
    button_text = models.CharField(max_length=255, default="Register Now!")
    speakers = models.ManyToManyField(Speaker, related_name='events', blank=True)
    date = models.TextField(default="", blank=True)
    isLaunched = models.BooleanField(default=False, blank=True)
    isRegNeeded = models.BooleanField(default=False, blank=True)
    isEnded = models.BooleanField(default=False, blank=True)
    isGM = models.BooleanField(default=False, blank=True)
    isWorkshops = models.BooleanField(default=False, blank=True)
    priority = models.BooleanField(default=False, blank=False)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        event = Event.objects.filter(id=self.id).first()
        if event and event.image != self.image:
            try:
                event.image.delete(save=False)
            except Exception as e:
                print(e)
                
        if self.image:
            self.image = process_image(self.image, self.name, "event_")
        super().save(*args, **kwargs)

class Workshops(models.Model):
    workshop = models.CharField(max_length=255, blank=False, unique=True, choices=WORKSHOPS.items())
        
class OtherDetails(models.Model):
    field_pref1 = models.CharField(max_length=255, default="", blank=True, choices=FIELDS.items())
    field_pref2 = models.CharField(max_length=255, default="", blank=True, choices=FIELDS.items())
    field_pref3 = models.CharField(max_length=255, default="", blank=True, choices=FIELDS.items())
    field_pref4 = models.CharField(max_length=255, default="", blank=True, choices=FIELDS.items())
    field_pref5 = models.CharField(max_length=255, default="", blank=True, choices=FIELDS.items())
    
    field_pref1_gm = models.CharField(max_length=255, default="", blank=True, choices=FIELDS_GM.items())
    field_pref2_gm = models.CharField(max_length=255, default="", blank=True, choices=FIELDS_GM.items())
    field_pref3_gm = models.CharField(max_length=255, default="", blank=True, choices=FIELDS_GM.items())
    
    workshops = models.ManyToManyField(Workshops, related_name='workshops', blank=True)

    pref_date = models.CharField(max_length=255, default="", blank=True, choices=DATES.items())
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.user.username + " - " + self.event.name
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
            



