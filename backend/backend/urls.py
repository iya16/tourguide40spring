
# from django.contrib import admin
# from django.urls import path, include

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     # path('user/', include('user.urls'))
#      path('user/', include('user.urls')),
# ]
 
from django.contrib import admin
from django.urls import path
from user.admin import admin_site

 
urlpatterns = [
    path('AdminPage/', admin_site.urls),
]

 