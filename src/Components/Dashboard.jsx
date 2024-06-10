import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "./sidebar";
import Weather from "./Weather";
import DashboardHeader from "./DashboardHeader";
import DashCards from "./DashCard";
import ChartsContainer from "./ChartsContainer";

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
    <div className="flex"> 
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-100 flex flex-col">
        <DashboardHeader />
        <div className="flex flex-col items-center justify-center space-y-6 p-6 mt-16 w-full">
          <DashCards className="w-full" />
          <ChartsContainer className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
