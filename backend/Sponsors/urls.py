from django.urls import path
from .views import SponsorList

urlpatterns = [
    # path('<int:id>', EventList.as_view(), name='event-by-id'),
    path('', SponsorList.as_view(), name='event-list'),
]
