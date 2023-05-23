from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializer import ProductSerializer, BuySerializer
from .models import Product, Buy
from django.core.paginator import Paginator


# Create your views here.
class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class ProductViewSet(viewsets.ViewSet):
    @action(detail=False, methods=['get'])
    def get_product(self, request):
        page = request.GET.get('page', 1)
        size = request.GET.get('size', 10)

        try:
            products = Product.objects.all()
            paginator = Paginator(products, size)
            product_page = paginator(page)

            product_serializer = ProductSerializer(product_page, many=True)
            total_pages = paginator.num_pages
            total_elements = paginator.count

            custom_page_res = {
                'lastPage': not product_page.has_next(),
                'totalPage': total_pages,
                'totalElements': total_elements,
                'data': product_serializer.data
            }

            return Response(custom_page_res)

        except Exception as e:
        
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    @action(detail=False, methods=['post'])
    def save_product(self, request):
        product_data_list = request.data

        try:
            serializer = ProductSerializer(data=product_data_list, many=True)

            if serializer.isValid():
                serializer.save()
                return Response(status=status.HTTP_201_CREATED)
            else: 
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)        

    @action(detail=False, methods=['put'])
    def update_product(self, request):
        product_id = request.data.get('id')
        product_data = request.data.get('product')

        if not product_id or not product_data:
            return Response({'error': 'id and product data are required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            product = Product.objects.get(pk=product_id)
            serializer = ProductSerializer(product, data=product_data, partial=True)

            if serializer.is_valid():
                serializer.save()
                return Response(status=status.HTTP_204_NO_CONTENT)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
        except Product.DoesNotExist:
            return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
             return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    
    @action(detail=False, methods=['delete'])
    def delete_product(self, request):
        product_id = request.data.get('id')
        if product_id is None:
            return Response({'error': 'id parameter is required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        try: 
            product = Product.objects.get(pk=product_id)
            product.enabled = False
            product.save()

            return Response(status=status.HTTP_204_NO_CONTENT)
        
        except Product.DoesNotExist:
            return Response({'error': 'Product not found.'}, status=status.HTTP_404_NOT_FOUND)
        
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    

class BuyView(viewsets.ModelViewSet):
    serializer_class = BuySerializer
    queryset = Buy.objects.all()


    @action(detail=False, methods=['get'])
    def get_buys(self, request):
        try:
            buys = Buy.objects.all()
            serializer = self.get_serializer(buys, many=True)
            
            return Response(serializer.data)
        
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

    @action(detail=False, methods=['post'])
    def save_buy(self, request):
        buy_data_list: request.data
        try:
            serializer = BuySerializer(data=buy_data_list, many=True)

            if serializer.is_Valid():
                serializer.save()
                return Response(status=status.HTTP_201_CREATED)
            else:
        
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            




        
    
        
         

        