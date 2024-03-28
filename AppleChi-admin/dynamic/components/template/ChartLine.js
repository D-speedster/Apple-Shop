import React from "react";
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);
import { Line } from "react-chartjs-2";

const data = {

  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "blue",
      borderColor: "gray"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      backgroundColor: "green",
      borderColor: "#666"
    }
  ]
};

export default function App() {
  return (
    <div className="App">
      <Line data={data} options={{ maintainAspectRatio: false }} height='300px' />
    </div>
  );
}
