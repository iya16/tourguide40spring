
# from django.urls import path
# from .views import signup

# urlpatterns = [
#     path('signup/', signup, name='signup'),
# ]
# 

# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import PackageViewSet, CustomerViewSet, TourGuiderViewSet

# router = DefaultRouter()
# router.register(r'packages', PackageViewSet)
# router.register(r'customers', CustomerViewSet)
# router.register(r'tourguiders', TourGuiderViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
# ]

# from django.conf.urls import url, include
# from django.urls import path, include, re_path


# accounts_urlpatterns = [
#     re_path(r'^api/v1/', include('djoser.urls')),
#     re_path(r'^api/v1/', include('djoser.urls.authtoken')),
# ]