```python
from django.test import TestCase
from .models import Resources, ShipDetails, Schedule
from .serializers import ResourcesSerializer, ShipDetailsSerializer, ScheduleSerializer
from .views import ResourcesView, ShipDetailsView, ScheduleView
from rest_framework.test import APIRequestFactory

class ResourcesTestCase(TestCase):
    def setUp(self):
        Resources.objects.create(name="John Doe", role="Captain")

    def test_resources_can_be_created(self):
        """Resources can be created correctly"""
        john = Resources.objects.get(name="John Doe")
        self.assertEqual(john.role, 'Captain')

class ShipDetailsTestCase(TestCase):
    def setUp(self):
        ShipDetails.objects.create(name="Titanic", rank=1)

    def test_ship_details_can_be_created(self):
        """ShipDetails can be created correctly"""
        titanic = ShipDetails.objects.get(name="Titanic")
        self.assertEqual(titanic.rank, 1)

class ScheduleTestCase(TestCase):
    def setUp(self):
        Schedule.objects.create(staff_name="John Doe", ship_name="Titanic", start_date="2022-01-01", end_date="2022-12-31")

    def test_schedule_can_be_created(self):
        """Schedule can be created correctly"""
        schedule = Schedule.objects.get(staff_name="John Doe")
        self.assertEqual(schedule.ship_name, "Titanic")

class ViewTestCase(TestCase):
    def setUp(self):
        self.factory = APIRequestFactory()
        self.resource = Resources.objects.create(name="John Doe", role="Captain")
        self.ship = ShipDetails.objects.create(name="Titanic", rank=1)
        self.schedule = Schedule.objects.create(staff_name="John Doe", ship_name="Titanic", start_date="2022-01-01", end_date="2022-12-31")

    def test_resources_view(self):
        """ResourcesView returns correct data"""
        request = self.factory.get('/resources/')
        view = ResourcesView.as_view()
        response = view(request)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, [ResourcesSerializer(self.resource).data])

    def test_ship_details_view(self):
        """ShipDetailsView returns correct data"""
        request = self.factory.get('/shipdetails/')
        view = ShipDetailsView.as_view()
        response = view(request)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, [ShipDetailsSerializer(self.ship).data])

    def test_schedule_view(self):
        """ScheduleView returns correct data"""
        request = self.factory.get('/schedule/')
        view = ScheduleView.as_view()
        response = view(request)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, [ScheduleSerializer(self.schedule).data])
```