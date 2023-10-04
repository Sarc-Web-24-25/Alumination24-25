from django.db import models


class Event(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='event_images/')

    def __str__(self):
        return self.name


class RegistrationField(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    field_name = models.CharField(max_length=255)
    # Specify field type (e.g., department, roll_no)
    field_type = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.field_name} for {self.event.name}"
