from rest_framework import serializers
from .models import Event, Speaker


class SpeakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Speaker
        fields = ('id', 'fullname', 'profile_image', 'description')

class EventSerializer(serializers.ModelSerializer):
    speakers = SpeakerSerializer(many=True, read_only=True)
    class Meta:
        model = Event
        exclude = ("applicants",)
