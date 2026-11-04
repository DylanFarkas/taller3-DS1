import Chart from "react-apexcharts";

export default function ProductsByBrandChart({ labels = [], series = [] }) {
  const options = {
    chart: { id: "products-by-brand", toolbar: { show: true }, fontFamily: "inherit" },
    xaxis: { categories: labels },
    dataLabels: { enabled: false },
    grid: { borderColor: "#e0e0e0", strokeDashArray: 5},
    title: { text: "Cantidad de productos por marca" },
    stroke: { curve: "straight", width: 3 },
    markers: { size: 4 },
  };

  const chartSeries = [{ name: "Productos", data: series }];

  return (
    <Chart options={options} series={chartSeries} type="line" height={320} />
  );
}
