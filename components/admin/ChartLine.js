import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function ChartLine() {
  const data = {
    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
    datasets: [
      {
        label: "فروش",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(0, 123, 255, 0.1)",
        borderColor: "blue"
      },
      {
        label: "سفارشات",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        backgroundColor: "green",
        borderColor: "#666"
      }
    ]
  };

  const options = {
    maintainAspectRatio: false
  };

  return (
    <div className="App">
      <Line data={data} options={options} height='300px' />
    </div>
  );
}
