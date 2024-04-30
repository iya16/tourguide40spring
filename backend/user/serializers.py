
# from rest_framework import serializers
# from .models import *

# class CustomerSignupSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Customer
#         fields = ['full_name', 'email', 'password', 'nationality']
#         extra_kwargs = {
#             'password': {'write_only': True}  # Ensure password field is write-only
#         }

#     def create(self, validated_data):
#         # Create and return a new Customer instance using the validated data
#         return Customer.objects.create(**validated_data)

# from rest_framework import serializers
# from .models import Package, Customer, TourGuider

# class PackageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Package
#         fields = '__all__'

# class CustomerSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Customer
#         fields = '__all__'

# class TourGuiderSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = TourGuider
#         fields = '__all__'