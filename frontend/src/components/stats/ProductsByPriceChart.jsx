import Chart from "react-apexcharts";

export default function ProductsByPriceChart({ labels = [], series = [] }) {
  const options = {
    chart: { id: "products-by-price", fontFamily: "inherit" },
    colors: ["#fde68a", "#fbbf24", "#f59e0b", "#b45309"],
    dataLabels: { enabled: false },
    labels,
    title: { text: "Cantidad de productos por rango de precio" },
    legend: { position: "bottom" },
  };

  return <Chart options={options} series={series} type="donut" height={320} />;
}
