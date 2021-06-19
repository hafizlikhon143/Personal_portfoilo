from django.db import models

# Create your models here.


class Packages(models.Model):
    package_name = models.CharField(max_length=255)
    package_price = models.IntegerField()
    package_desc = models.TextField()

    def __str__(self):
        return self.package_name


class Order(models.Model):
    package = models.ForeignKey(Packages, on_delete=models.CASCADE)
    client_email = models.EmailField()
    project_name = models.CharField(max_length=255)
    project_desc = models.TextField()
    status = models.BooleanField(default=False)
