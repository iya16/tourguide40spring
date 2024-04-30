# from django.shortcuts import render
# from rest_framework import status
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from .serializers import serializers

# @api_view(['POST'])
# def signup(request):
#     serializer = serializers(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# from rest_framework import viewsets
# from .models import Package, Customer, TourGuider
# from .serializers import PackageSerializer, CustomerSerializer, TourGuiderSerializer

# class PackageViewSet(viewsets.ModelViewSet):
#     queryset = Package.objects.all()
#     serializer_class = PackageSerializer

# class CustomerViewSet(viewsets.ModelViewSet):
#     queryset = Customer.objects.all()
#     serializer_class = CustomerSerializer

# class TourGuiderViewSet(viewsets.ModelViewSet):
#     queryset = TourGuider.objects.all()
#     serializer_class = TourGuiderSerializer
