```python
from django.db import models

class Resources(models.Model):
    name = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    last_contract_end = models.DateTimeField()
    next_availability = models.DateTimeField()

    def __str__(self):
        return self.name

class ShipDetails(models.Model):
    name = models.CharField(max_length=200)
    rank = models.IntegerField()

    def __str__(self):
        return self.name

class Schedule(models.Model):
    resource = models.ForeignKey(Resources, on_delete=models.CASCADE)
    ship = models.ForeignKey(ShipDetails, on_delete=models.CASCADE)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()

    def __str__(self):
        return f"{self.resource.name} - {self.ship.name}"
```