from django.db import models
from django.utils.safestring import mark_safe
from PIL import Image
from Authentication.models import MyUser
from django.core.files import File
import io

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

class Sponsor(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='sponsor_images/')
    date = models.TextField(default="", blank=True)
    priority = models.BooleanField(default=False, blank=False)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        sponsor = Sponsor.objects.filter(id=self.id).first()
        if sponsor and sponsor.image != self.image:
            try:
                sponsor.image.delete(save=False)
            except Exception as e:
                print(e)
                
        if self.image:
            self.image = process_image(self.image, self.name, "event_")
        super().save(*args, **kwargs)
