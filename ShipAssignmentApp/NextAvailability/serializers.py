```python
from rest_framework import serializers
from .models import Resources, ShipDetails, Schedule

class ResourcesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resources
        fields = '__all__'

class ShipDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShipDetails
        fields = '__all__'

class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'
```