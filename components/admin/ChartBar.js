import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartBar() {
    const data = {
        labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر"],
        datasets: [
            {
                label: "عملکرد فروش",
                backgroundColor: "blue",
                borderColor: "black",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "سفارشات",
                backgroundColor: "green",
                borderColor: "black",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(205,9,12,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [45, 79, 50, 41, 16, 85, 20]
            }
        ]
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    padding: 10,
                }
            }
        }
    };

    return (
        <div>
            <Bar data={data} options={options} height='300px' width='600px' />
        </div>
    );
}
