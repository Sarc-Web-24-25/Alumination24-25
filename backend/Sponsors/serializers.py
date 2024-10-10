from rest_framework import serializers
from .models import Sponsor

class SponsorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sponsor
        fields = ('name', 'image', 'url')