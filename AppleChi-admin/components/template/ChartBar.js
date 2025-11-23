import React from "react";

import { Bar } from "react-chartjs-2";



export default function chartBar() {
    const data = {
        
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July"
            ],
            datasets: [
                {
                    label: "عملکرد فروش",
                    backgroundColor: "blue",
                    borderColor: "black",
                    borderWidth: 1,
                    //stack: 1,
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },

                {
                    label: "عملکرد فروش",
                    backgroundColor: "green",
                    borderColor: "black",
                    borderWidth: 1,
                    //stack: 1,
                    hoverBackgroundColor: "rgba(205,9,12,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                    data: [45, 79, 50, 41, 16, 85, 20]
                }
            ]
        
    }

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
    return (
        <div>
            <Bar
                data={data}
                options={options}
                height='300px'
                width='600px'
            />
        </div>
    )
}
