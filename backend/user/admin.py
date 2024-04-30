from django.contrib import admin
from django.contrib.admin import AdminSite
from .models import Comment,Customer,TourGuide,Package


class MyAdminSite(AdminSite):
    site_header="40MinchTourgudie Admin page"
    site_title = 'Custom Admin'
    index_title='Welcome to the Admin Dashboard'


admin_site=MyAdminSite(name="AdminPage")

admin_site.register(Customer)
admin_site.register(TourGuide)
admin_site.register(Package)
admin_site.register(Comment)
 