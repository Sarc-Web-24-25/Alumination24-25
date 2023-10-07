from django.db import models
from django.contrib.auth.models import AbstractUser
from .options import *
from django.core.files import File
from PIL import Image
import io


def process_image(image_file, id):
    image = Image.open(image_file)
    if image.mode == "RGBA":
        image = image.convert("RGB")
    output = io.BytesIO()
    image.save(
        output, format="JPEG", optimize=True, quality=60
    )
    output.seek(0)
    output.name = "profile_" + str(id) + ".jpg"
    return File(output)

class MyUser(AbstractUser):
    is_alum = models.BooleanField(blank=False)


class Profile(models.Model):
    def __str__(self):
        return "%s %s" % (self.fullname, self.email)
    user = models.OneToOneField(MyUser, on_delete=models.CASCADE)
    rollno = models.CharField(max_length=20, blank=True)
    profile_pic = models.ImageField(upload_to="profile_pics/", null=True, default="profile_pics/default.png")
    fullname = models.CharField(max_length=255, blank=False, default="")
    email = models.EmailField(blank=False)
    is_alumni = models.BooleanField(default=False)
    personal_email = models.EmailField(blank=False)
    hostel = models.CharField(max_length=255, blank=True)
    department = models.CharField(
        max_length=255,
        blank=False,
        choices=tuple([(dept, dept) for dept in DEPARTMENTS.keys()]),
    )
    program = models.CharField(
        max_length=30,
        blank=True,
        choices=(
            ("ug", "Undergraduate"),
            ("dd", "Dual Degree"),
            ("pg", "Postgraduate"),
            ("idddp", "Inter-Disciplinary Dual Degree"),
        ),
    )

    degree = models.CharField(max_length=50, choices=DEGREES, blank=True)
    graduation_year = models.IntegerField(blank=False)
    gender = models.CharField(choices=GENDER, max_length=100, blank=False,)
    phoneno = models.CharField(max_length=20, blank=False, default="")

    def save(self, *args, **kwargs):
        profile = Profile.objects.filter(id=self.id).first()
        if profile and profile.profile_pic != self.profile_pic:
            try:
                profile.profile_pic.delete(save=False)
            except Exception as e:
                print(e)
        
        if self.profile_pic:
            self.profile_pic = process_image(self.profile_pic, self.id)
        else:
            self.profile_pic = "/profile_pics/default.png"
        
        super().save(*args, **kwargs)