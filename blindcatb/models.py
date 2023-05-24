from django.db import models


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


class PurchaseDetail(models.Model):
    
    buy = models.ForeignKey(Buy, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    totalPrice = models.IntegerField(default=0)

    def __str(self):
        return self.product
    
