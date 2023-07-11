from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from .serializer import PersonaSerializer
from .models import Persona



# Create your views here.
class PersonaViewSet(viewsets.ModelViewSet):
    serializer_class = PersonaSerializer
    
    def get_queryset(self, pk=None):
        if pk is None:
            return self.get_serializer().Meta.model.objects.all()
        return self.get_serializer().Meta.model.objects.filter(id=pk).first()


    def list(self, request):
        product_serializer = self.get_serializer(self.get_queryset(), many = True)
        return Response(product_serializer.data, status = status.HTTP_200_OK) 

    def create(self, request):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message':'Persona creada correctamente!'}, status = status.HTTP_201_CREATED)
        return Response({'message':'', 'error':serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
    def update(self, request, pk=None):
        if self.get_queryset(pk):
            persona_serializer = self.serializer_class(self.get_queryset(pk), data=request.data)            
            if persona_serializer.is_valid():
                persona_serializer.save()
                return Response({'message':'Persona actualizada correctamente!'}, status=status.HTTP_200_OK)
            return Response({'message':'', 'error':persona_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        persona = self.get_queryset().filter(id=pk).first() # get instance        
        if persona:
            persona.delete()
            return Response({'message':'Persona eliminada correctamente!'}, status=status.HTTP_200_OK)
        return Response({'error':'No existe un Persona con estos datos!'}, status=status.HTTP_400_BAD_REQUEST)
