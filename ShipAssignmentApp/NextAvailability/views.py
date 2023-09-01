```python
from django.shortcuts import render
from rest_framework import viewsets
from .models import Resources, ShipDetails, Schedule
from .serializers import ResourcesSerializer, ShipDetailsSerializer, ScheduleSerializer

class ResourcesView(viewsets.ModelViewSet):
    queryset = Resources.objects.all()
    serializer_class = ResourcesSerializer

class ShipDetailsView(viewsets.ModelViewSet):
    queryset = ShipDetails.objects.all()
    serializer_class = ShipDetailsSerializer

class ScheduleView(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
```