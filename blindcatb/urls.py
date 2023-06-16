from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from blindcatb import views

router = routers.DefaultRouter()
router.register(r"products", views.ProductView, "products")
router.register(r'buys', views.BuyView, 'buys')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("api/v1", include(router.urls)),
    path("docs/", include_docs_urls(title='Products API')),
]
#All of the code above, generates all crud requests

