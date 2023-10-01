from django.urls import path
from .views import EventListCreateView, RegistrationFieldListView

urlpatterns = [
    path('api/events/', EventListCreateView.as_view(), name='event-list-create'),
    path('api/registration-fields/', RegistrationFieldListView.as_view(),
         name='registration-field-list'),
]
