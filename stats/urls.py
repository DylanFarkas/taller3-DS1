from django.urls import path
from .views import ProductsByBrandView, ProductsByCategoryView, ProductsByPriceRangeView, ProductsByStockRangeView

urlpatterns = [
    path("products-by-brand/", ProductsByBrandView.as_view()),
    path("products-by-category/", ProductsByCategoryView.as_view()),
    path("products-by-price-range/", ProductsByPriceRangeView.as_view()),
    path("products-by-stock-range/", ProductsByStockRangeView.as_view()),
]