import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../Components/sidebar";
import Weather from "./Weather";
import DashboardHeader from "./DashboardHeader";

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
      <div className="flex-1 p-4">
      <Routes>
          <Route path="/dashboard/*" element={<Weather />} />
        </Routes>
      </div>
      <DashboardHeader />
    </div>
  );
}

export default Dashboard;
