import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['PM2.5', 'PM10', 'NO2', 'CO'],
  datasets: [
    {
      data: [40, 30, 20, 10],
      backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
      hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
      },
    },
    title: {
      display: true,
      text: 'Air Pollutant Distribution',
      position: 'top',
    },
  },
};

const DonutChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow w-full max-w-2xl mx-auto md:mx-0">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">Air Pollutant Distribution</div>
        <div className="text-gray-500">This Month <span className="ml-1">&#9662;</span></div>
      </div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
