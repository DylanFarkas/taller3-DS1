from django.db.models import Count
from rest_framework.views import APIView
from rest_framework.response import Response
from products.models import Product

class ProductsByBrandView(APIView):
    def get(self, request):
        rows = (Product.objects.values("brand").annotate(total=Count("id")).order_by("-total"))

        return Response({
            "labels": [r["brand"] for r in rows], 
            "series": [r["total"] for r in rows]
        })

class ProductsByCategoryView(APIView):
    def get(self, request):
        rows = (Product.objects.values("category__name").annotate(total=Count("id")).order_by("-total"))

        return Response({
            "labels": [r["category__name"] for r in rows],
            "series": [r["total"] for r in rows],
        })

class ProductsByPriceRangeView(APIView):
    def get(self, request):
        labels = [
            "$1 - $399999",
            "$400000 - $999999",
            "$1000000 - $2999999",
            "+$3000000",
        ]
        series = [
            Product.objects.filter(price__range=(1, 399999)).count(),
            Product.objects.filter(price__range=(400000, 999999)).count(),
            Product.objects.filter(price__range=(1000000, 2999999)).count(),
            Product.objects.filter(price__gte=3000000).count(),
        ]
        
        return Response({"labels": labels, "series": series})

class ProductsByStockRangeView(APIView):
    def get(self, request):
        labels = ["0 - 4", "5 - 9", "10 - 14", "15 - 19", "+20"]
        series = [
            Product.objects.filter(stock__range=(0, 4)).count(),
            Product.objects.filter(stock__range=(5, 9)).count(),
            Product.objects.filter(stock__range=(10, 14)).count(),
            Product.objects.filter(stock__range=(15, 19)).count(),
            Product.objects.filter(stock__gte=20).count(),
        ]

        return Response({"labels": labels, "series": series})