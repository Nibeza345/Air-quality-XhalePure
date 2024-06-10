import React from 'react';

const LatestNews = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow w-full max-w-4xl mx-auto md:mx-0 h-full">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-semibold">Latest News</div>
        <button className="bg-green-700 text-white px-4 py-2 rounded">Check It</button>
      </div>
      <div className="text-gray-700">
        <ul>
          <li className="mb-4">
            <div className="font-bold">Amazon Wildfire</div>
            <div className="text-sm">A massive wildfire is spreading across the Amazon, causing widespread destruction and environmental damage.</div>
          </li>
          <li className="mb-4">
            <div className="font-bold">European Conference on Pollutants Emission</div>
            <div className="text-sm">Key discussions on reducing pollutant emissions and improving air quality in European cities took place last week.</div>
          </li>
          <li className="mb-4">
            <div className="font-bold">Ozone Layer Status in 2024</div>
            <div className="text-sm">Recent studies show significant improvements in the ozone layer, with projections indicating a continued positive trend.</div>
          </li>
          <li className="mb-4">
            <div className="font-bold">New Solutions by ExhalePure</div>
            <div className="text-sm">ExhalePure introduces innovative air purification solutions, offering the best air conditions for urban environments.</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LatestNews;
