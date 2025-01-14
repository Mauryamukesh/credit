from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', views.home),
    path('home/', views.home, name='home'), 
    path('contact/', views.contact, name='contact'), 
    path('applicationForm/', views.applicationForm, name='applicationForm'), 
    path('compare/', views.compare, name='compare'), 
    path('about/', views.about, name='about'), 
    path('support/', views.support, name='support'), 
]
# urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)