import Chart from "react-apexcharts";

export default function ProductsByStockChart({ labels = [], series = [] }) {
  const options = {
    chart: { id: "products-by-stock", fontFamily: "inherit" },
    colors: ["#fcd34d", "#fbbf24", "#f59e0b", "#d97706", "#b45309"],
    dataLabels: { enabled: false },
    labels,
    title: { text: "Cantidad de productos por stock" },
    legend: { position: "bottom" },
  };

  return <Chart options={options} series={series} type="pie" height={320} />;
}
