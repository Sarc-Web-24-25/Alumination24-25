from rest_framework import serializers
from .models import Event, RegistrationField


class RegistrationFieldSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistrationField
        fields = ('id', 'field_name', 'field_type')


class EventSerializer(serializers.ModelSerializer):
    registration_fields = RegistrationFieldSerializer(
        many=True, read_only=True)

    class Meta:
        model = Event
        fields = ('id', 'name', 'description', 'image', 'registration_fields')
