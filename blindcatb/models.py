from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission


# Create your models here.
class Product(models.Model):
    productName = models.CharField(max_length=200)
    description = models.CharField(max_length=400)
    productPrice = models.IntegerField(default=0)
    producQuantity = models.CharField(max_length=20)
    stock = models.IntegerField(default = 0)
    minProduct = models.IntegerField(default=0)

    objects = models.Manager()

    def __str__(self):
        return self.productName

class Buy(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, default=None, null=True)
    quantity = models.IntegerField(default=0)
    totalPrice = models.IntegerField(default=0)
    date = models.DateTimeField(null=True, blank=True)
    clientIdType = models.CharField(max_length=5)
    clientId = models.CharField(max_length=20)
    clientName = models.CharField(max_length=200)

    def save(self, *args, **kwargs):
        self.totalPrice = self.quantity*self.product.productPrice
        super().save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.product}, {self.date}"
    

class User(AbstractUser):
    seller = models.CharField(max_length=50)
    groups = models.ManyToManyField(Group, related_name='custom_user_set')
    user_permissions = models.ManyToManyField(Permission, related_name='custom_user_set')
    class Meta:
        permissions = [
            ('view_product', 'Can view products'),
            ('edit_product', 'Can edit products'),
            ('delete_product', 'Can delete products'),
            ('create_product', 'Can create product')
        ]

class PurchaseDetail(models.Model):
    
    buy = models.ForeignKey(Buy, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    totalPrice = models.IntegerField(default=0)

    def __str(self):
        return self.product
    
