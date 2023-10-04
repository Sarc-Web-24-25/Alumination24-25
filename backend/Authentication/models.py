from django.db import models
from django.contrib.auth.models import AbstractUser
from .options import *

class MyUser(AbstractUser):
    is_alum = models.BooleanField(default=False)


class Profile(models.Model):
    def __str__(self):
        return "%s %s" % (self.fullname, self.email)

    user = models.OneToOneField(MyUser, on_delete=models.CASCADE)
    rollno = models.CharField(max_length=20, blank=False, default="")
    profile_pic = models.ImageField(upload_to="images/profile_pics/", blank=True)
    fullname = models.CharField(max_length=255, blank=False, default="")
    email = models.EmailField(blank=False)
    is_alumni = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)
    address = models.CharField(max_length=500, blank=False, default="")
    personal_email = models.EmailField(blank=False)
    dob = models.DateField(blank=False)
    hostel = models.CharField(choices=HOSTEL_CHOICES, max_length=255, blank=False)
    room_no = models.CharField(blank=False, max_length=10, default="")
    department = models.CharField(
        max_length=255,
        blank=False,
        choices=tuple([(dept, dept) for dept in DEPARTMENTS.keys()]),
    )
    program = models.CharField(
        max_length=30,
        blank=False,
        choices=(
            ("ug", "Undergraduate"),
            ("dd", "Dual Degree"),
            ("pg", "Postgraduate"),
            ("idddp", "Inter-Disciplinary Dual Degree"),
        ),
    )

    degree = models.CharField(max_length=50, choices=DEGREES, blank=False)
    join_year = models.IntegerField(blank=False)
    graduation_year = models.IntegerField(blank=False)
    gender = models.CharField(choices=GENDER, max_length=100, blank=False,)
    career = models.CharField(choices=CAREER, max_length=100, blank=False,)
    phoneno = models.CharField(max_length=20, blank=False, default="")

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)