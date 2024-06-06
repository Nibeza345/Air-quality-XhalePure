import {useState,React} from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar';
import Weather from './Weather';
import DashboardHeader from './DashboardHeader';


function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
      <div>
     <DashboardHeader/>
      </div>
      
    </div>
  );
}

export default Dashboard;
