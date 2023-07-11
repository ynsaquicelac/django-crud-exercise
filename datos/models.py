from django.db import models

# Create your models here.
class Persona(models.Model):
    nombre = models.CharField(max_length=500)
    edad = models.IntegerField()
    sexo = models.CharField(max_length=200)
    nacionalidad = models.CharField(max_length=200)

    def __str__(self):
        return self.nombre