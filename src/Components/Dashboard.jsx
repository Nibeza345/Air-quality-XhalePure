import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar";
import Weather from "./Weather";
import DashboardHeader from "./DashboardHeader";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Redirect to login page if token is not present
      window.location.href = "/login";
    } else {
      // Send token to server for verification
      fetch("/api/verifyToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // Include token in Authorization header
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to verify token");
          }
          // Token is valid, set loading to false
          setLoading(false);
        })
        .catch((error) => {
          console.error("Token verification failed:", error);
          // Redirect to login page or display error message
          window.location.href = "/login";
        });
    }
  }, []);

  if (loading) {
    // Display loading indicator while verifying token
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
      <div>
        <DashboardHeader />
      </div>
    </div>
  );
};

export default Dashboard;
