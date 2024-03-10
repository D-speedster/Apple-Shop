import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['آیفون ', 'مک بوک', 'اپل واچ'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                'yellow' ,
                'blue',
                'green',

            ],
            borderColor: 'none',
            borderWidth: 1,
        },
    ],
};

export default function App() {
    return <Doughnut data={data} />;
}
