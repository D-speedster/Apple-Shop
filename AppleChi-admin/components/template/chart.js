import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
    legend: {
        labels: {
            padding: 10,
        },
    },
    labels: {
        position: "outside",
    },
    labelOffset: 10,
    labelPadding: 5,
    maintainAspectRatio: false
};
export const data = {

    labels: ['آیفون ', 'مک بوک', 'اپل واچ'],
    datasets: [

        {
            label: '# of Votes',
            hoverBackgroundColor: "rgba(232,105,90,0.8)",
            hoverBorderColor: "white",
            data: [12, 19, 3],
            scaleStepWidth: 4,
            backgroundColor: [
                'yellow',
                'blue',
                'green',

            ],
            borderColor: 'none',
            borderWidth: 1,
        },

    ],
    options: { 
        Legend: {
            labels: {
                fontColor: "blue",
                fontSize: 18
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "green",
                    fontSize: 24,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "purple",
                    fontSize: 14,
                    stepSize: 1,
                    beginAtZero: true
                }
            }]
        }
    }
    
};

export default function App() {
    return <Doughnut width={100}

        height={240}
        options={options} data={data} />;
}
