from rest_framework import serializers
from .models import Event, Speaker, OtherDetails


class SpeakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Speaker
        fields = ('id', 'fullname', 'profile_image', 'description')

class EventSerializer(serializers.ModelSerializer):
    speakers = SpeakerSerializer(many=True, read_only=True)
    class Meta:
        model = Event
        exclude = ("applicants",)
        
        
class OtherDetailsSerializer(serializers.Serializer):
    class Meta:
        model = OtherDetails
        fields = ('id', 'field_pref1', 'field_pref2', 'field_pref3', 'field_pref4','field_pref5', 'pref_date', 'event', 'user')
    def create(self, validated_data):
        return OtherDetails.objects.create(**validated_data)
        
