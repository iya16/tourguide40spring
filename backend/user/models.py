from django.db import models
from django.utils import timezone

class Customer(models.Model):

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100,default='Not provided')
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    country = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=False, default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class TourGuide(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    languages_spoken = models.CharField(max_length=200, blank=True, null=True)
    licence=models.BooleanField()
    age=models.IntegerField(default=0)
    bio = models.TextField(blank=True, null=True)
    available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=False,default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Package(models.Model):
    
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='tour_package_images/', blank=True, null=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    age=models.IntegerField(default=0)
    total_number_of_people=models.IntegerField()
    accommodation = models.TextField()
    tour_date=models.DateTimeField()
    duration = models.CharField(max_length=50)
    tour_starts=models.TextField()
    tour_end=models.TextField()
    location=models.TextField(null=True)
    description = models.TextField()
    accessibility=models.TextField()
    created_at = models.DateTimeField(auto_now_add=False, default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

  
    def __str__(self):
        return self.name
    
class Comment(models.Model):
    user = models.ForeignKey(Customer, on_delete=models.CASCADE)
    content = models.TextField()
    country = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=False, default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
      return f"Comment by {self.user.username} on {self.created_at}"



 





 