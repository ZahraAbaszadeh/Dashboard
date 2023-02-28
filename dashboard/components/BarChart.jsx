import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const BarChart = () => {
  const [chartData, setCharData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setCharData({
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "sat", "sun"],
      datasets: [
        {
          label: "Sales $",
          data: [38754, 65781, 45678, 95147, 57896, 22554, 65478],
          borderColor: "rgb(114, 145, 204)",
          borderWidth: 2,
          backgroundColor: "rgba(53,162,235,0.3)",
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Revenue",
        },
      },
      maintainaspectratio: false,
      responsive: true,
    });
  }, []);
  return (
    <div className="w-full md:col-span-2 relative m-auto p-4 border rounded-lg bg-white" style={{height:"420px"}}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
