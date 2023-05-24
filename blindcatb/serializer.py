from rest_framework import serializers
from .models import Product, Buy

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__' 

class BuySerializer(serializers.ModelSerializer):
    totalPrice = serializers.ReadOnlyField()
    class Meta:
        model = Buy
        fields = '__all__'
