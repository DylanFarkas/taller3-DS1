import { useEffect, useState } from "react";
import { Package, Tag, Grid2X2, TriangleAlert } from "lucide-react";

import {
  getProductsByBrand,
  getProductsByCategory,
  getProductsByPriceRange,
  getProductsByStockRange,
} from "../../api/stats.api";
import ProductsByBrandChart from "./ProductsByBrandChart";
import ProductsByCategoryChart from "./ProductsByCategoryChart";
import ProductsByPriceChart from "./ProductsByPriceChart";
import ProductsByStockChart from "./ProductsByStockChart";
import StatCard from "./StatCard";

export default function Stats() {
  const [productsByBrand, setProductsByBrand] = useState({ labels: [], series: [] });
  const [productsByCategory, setProductsByCategory] = useState({ labels: [], series: [] });
  const [productsByPrice, setProductsByPrice] = useState({ labels: [], series: [] });
  const [productsByStock, setProductsByStock] = useState({ labels: [], series: [] });
  const [loading, setLoading] = useState(true);

  const totalProducts = productsByBrand.series.reduce((a, b) => a + b, 0);
  const totalBrands = productsByBrand.labels.length;
  const totalCategories = productsByCategory.labels.length;
  const stockBajo = productsByStock.series[0]; 

  useEffect(() => {
    async function loadStats() {
      setLoading(true);
      try {
        const [brand, category, price, stock] = await Promise.all([
          getProductsByBrand(),
          getProductsByCategory(),
          getProductsByPriceRange(),
          getProductsByStockRange(),
        ]);

        setProductsByBrand(brand.data);
        setProductsByCategory(category.data);
        setProductsByPrice(price.data);
        setProductsByStock(stock.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  if (loading) {
    return <p className="text-sm text-gray-500">Cargando estadísticas...</p>;
  }

  return (
    <div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total de productos" value={totalProducts} icon={<Package size={25} />} />
        <StatCard title="Total de marcas" value={totalBrands} icon={<Tag size={25} />} />
        <StatCard title="Total de categorías" value={totalCategories} icon={<Grid2X2 size={25} />} />
        <StatCard title="Stock bajo" value={stockBajo} icon={<TriangleAlert size={25} />} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2 rounded-2xl p-4 shadow-md">
        <ProductsByBrandChart {...productsByBrand} />
        <ProductsByCategoryChart {...productsByCategory} />
        <ProductsByStockChart {...productsByStock} />
        <ProductsByPriceChart {...productsByPrice} />
      </div>
    </div>
  );
}