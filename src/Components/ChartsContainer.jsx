import React from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';

const ChartsContainer = () => {
  return (
    <div className="flex justify-between">
      <BarChart />
      <LineChart />
    </div>
  );
};

export default ChartsContainer;
