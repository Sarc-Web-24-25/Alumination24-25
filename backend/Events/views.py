from .models import Event
from .serializers import EventSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from Authentication.models import MyUser



class EventList(APIView):
    def get(self, request, format=None, id=None):
        if id is not None:
            try:
                event = Event.objects.get(id=id)
            except Event.DoesNotExist:
                return Response({"message": "Event does not exist"}, status=status.HTTP_404_NOT_FOUND)
            serializer = EventSerializer(event)
            return Response(serializer.data, status=status.HTTP_200_OK)
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, format=None, id=None):
        if id is None:
            return Response({"message": "Please provide an id"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            user = MyUser.objects.get(id=request.user.id)
        except MyUser.DoesNotExist:
            return Response({"message": "User does not exist"}, status=status.HTTP_404_NOT_FOUND)
        try:
            event = Event.objects.get(id=id)
        except Event.DoesNotExist:
            return Response({"message": "Event does not exist"}, status=status.HTTP_404_NOT_FOUND)
        if(user.is_active == False):
            return Response({"message": "You have not verified your account"}, status=status.HTTP_400_BAD_REQUEST)
        if user in event.applicants.all():
            return Response({"message": "You have already applied for this event"}, status=status.HTTP_400_BAD_REQUEST)
        event.applicants.add(user)
        event.save()
        return Response({"message": "You have successfully applied for this event"}, status=status.HTTP_200_OK)
    
