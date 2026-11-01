import Chart from "react-apexcharts";

export default function ProductsByCategoryChart({ labels = [], series = [] }) {
  const options = {
    chart: { id: "products-by-category", toolbar: { show: true }, fontFamily: "inherit" },
    colors: ["#000000"],
    plotOptions: { bar: { horizontal: true , borderRadius: 10, barHeight: "70%" }},
    dataLabels: { enabled: false },
    xaxis: { categories: labels },
    title: { text: "Cantidad de productos por categoría" },
  };

  const chartSeries = [{ name: "Productos", data: series }];

  return (
    <Chart options={options} series={chartSeries} type="bar" height={320} />
  );
}