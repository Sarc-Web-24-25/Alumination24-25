from .models import Event, OtherDetails, Workshops
from .serializers import EventSerializer, OtherDetailsSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from Authentication.models import MyUser, Profile
from rest_framework import permissions
from Authentication.views import send_mail





class EventList(APIView):
    permission_classes = [permissions.AllowAny]
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
    
    permission_classes = [permissions.AllowAny]
    def put(self, request, format=None, id=None):
        if id is None:
            return Response({"error": "Please provide an id"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            user = MyUser.objects.get(id=request.user.id)
        except MyUser.DoesNotExist:
            return Response({"error": "User does not exist"}, status=status.HTTP_404_NOT_FOUND)
        try:
            profile = Profile.objects.get(user=user)
        except Profile.DoesNotExist:
            return Response({"error": "Profile does not exist, Please create a profile first"}, status=status.HTTP_404_NOT_FOUND)
        try:
            event = Event.objects.get(id=id)
        except Event.DoesNotExist:
            return Response({"error": "Event does not exist"}, status=status.HTTP_404_NOT_FOUND)
        if(user.is_active == False):
            return Response({"error": "You have not verified your account"}, status=status.HTTP_400_BAD_REQUEST)
        if user in event.applicants.all():
            return Response({"error": "You have already applied for this event"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            print(request.data)
            if request.data and ('other_details' in request.data):
                request.data['other_details']['user'] = user
                request.data['other_details']['event'] = event
                if 'workshops' in request.data['other_details']:
                    workshop_names = request.data['other_details']['workshops']
                    workshops_to_add = Workshops.objects.filter(workshop__in=workshop_names)
                    del request.data['other_details']['workshops']
                try: 
                    otherdetails = OtherDetails(**request.data['other_details'])
                    otherdetails.save()
                    if(workshops_to_add):
                        otherdetails.workshops.set(workshops_to_add)
                except Exception as e:
                    print(e)
                    return Response({"error": "Something went wrong please contact web team"}, status=status.HTTP_400_BAD_REQUEST)
            event.applicants.add(user)
        except:
            return Response({"error": "Something went wrong please contact team"}, status=status.HTTP_400_BAD_REQUEST)
        
        event.save()
        send_mail(subject="Registration Successful | Alumination | SARC IIT Bombay", userName=profile.fullname, userEmail=user.username, isEvent=True, eventName=event.name)
        return Response({"message": "You have successfully applied for this event"}, status=status.HTTP_200_OK)
    
