from django.urls import path, include
from rest_framework import routers
from blindcatb import views

router = routers.DefaultRouter()
router.register(r"blindcatb", views.ProductView, "blindcatb")

urlpatterns = [
    path("api/v1/", include(router.urls))
]
#All of the code above, generates all crud requests

