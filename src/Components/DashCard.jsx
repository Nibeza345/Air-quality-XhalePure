import React from 'react';

const airQualityStats = [
  { icon: '🌬️', value: '24', label: 'Air Quality Index', change: '0.43%', changeType: 'up' },
  { icon: '🌡️', value: '30°C', label: 'Temperature', change: '1.2°C', changeType: 'up' },
  { icon: '💧', value: '65%', label: 'Humidity', change: '0.5%', changeType: 'down' },
  { icon: '🌄', value: '30 km', label: 'Visibility', change: '2 km', changeType: 'down' },
];

const StatsCard = ({ icon, value, label, change, changeType }) => {
  return (
    <div className="p-20 bg-white shadow rounded-lg flex items-center">
      <div className="text-5xl">{icon}</div>
      <div className="ml-3">
        <div className="text-lg font-bold">{value}</div>
        <div className="text-gray-500 text-lg">{label}</div>
        <div className={`text-xs ${changeType === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {change} {changeType === 'up' ? '↑' : '↓'}
        </div>
      </div>
    </div>
  );
};

const StatsGrid = () => {
  return (
    <div className="flex gap-4 p-4 justify-start"> 
      {airQualityStats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsGrid;
