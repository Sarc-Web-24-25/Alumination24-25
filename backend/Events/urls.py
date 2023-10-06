from django.urls import path
from .views import EventList

urlpatterns = [
    path('<int:id>', EventList.as_view(), name='event-by-id'),
]
