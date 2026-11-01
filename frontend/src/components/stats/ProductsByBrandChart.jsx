import Chart from "react-apexcharts";

export default function ProductsByBrandChart({ labels = [], series = [] }) {
  const options = {
    chart: { id: "products-by-brand", toolbar: { show: true }, fontFamily: "inherit" },
    xaxis: { categories: labels },
    colors: ["#000000"],
    plotOptions: { bar: { borderRadius: 4, columnWidth: "50%" }},
    dataLabels: { enabled: false },
    grid: { borderColor: "#e0e0e0", strokeDashArray: 5},
    title: { text: "Cantidad de productos por marca" },
  };

  const chartSeries = [{ name: "Productos", data: series }];

  return (
    <Chart options={options} series={chartSeries} type="bar" height={320} />
  );
}
