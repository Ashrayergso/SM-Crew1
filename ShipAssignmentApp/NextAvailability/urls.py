```python
from django.urls import path
from . import views

urlpatterns = [
    path('resources/', views.ResourcesView.as_view(), name='resources'),
    path('shipdetails/', views.ShipDetailsView.as_view(), name='shipdetails'),
    path('schedule/', views.ScheduleView.as_view(), name='schedule'),
]
```