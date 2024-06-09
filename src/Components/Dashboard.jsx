import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar";
import Weather from "./Weather";
import DashboardHeader from "./DashboardHeader";
import StatsGrid from "./DashCard";
import ChartsContainer from "./ChartsContainer";
import DonutChart from "./DonutChart";



const Dashboard = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:3000/dashboard', {
          headers: { authorization: `Bearer ${token}` },
        });
        setMessage(response.data.message);
      } catch (err) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    fetchDashboard();
  }, [navigate]);

  return (
    <div className=" flex "> 
    <Sidebar />
    <DashboardHeader />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-6 p-6 w-screen">
    <StatsGrid className="w-full"/>
    <ChartsContainer  className="w-full"/>
    <DonutChart className="w-full"/>
    
</div>

  </div>
  );
}

export default Dashboard;
