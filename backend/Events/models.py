from django.db import models
from django.utils.safestring import mark_safe
from PIL import Image
from Authentication.models import MyUser
from django.core.files import File
import io

def process_image(image_file, name):
    image = Image.open(image_file)
    if image.mode == "RGBA":
        image = image.convert("RGB")
    output = io.BytesIO()
    image.save(
        output, format="JPEG", optimize=True, quality=60
    )
    output.seek(0)
    output.name = "event_" + str(name) + ".jpg"
    return File(output)

class Event(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='event_images/')
    youtube_link = models.TextField(default="", blank=True)
    applicants = models.ManyToManyField(MyUser, related_name='applied_events', blank=True)
    button_text = models.CharField(max_length=255, default="Register Now!")

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
            self.image = process_image(self.image, self.name)
        super().save(*args, **kwargs)
            
