from rest_framework import generics
from .models import Event, RegistrationField
from .serializers import EventSerializer, RegistrationFieldSerializer


class EventListCreateView(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class RegistrationFieldListView(generics.ListAPIView):
    queryset = RegistrationField.objects.all()
    serializer_class = RegistrationFieldSerializer
