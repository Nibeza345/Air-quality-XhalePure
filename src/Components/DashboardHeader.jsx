import React from "react";
import {FaEnvelope, FaBell, FaUser } from "react-icons/fa";

const DashboardHeader = ({ input, setInput, handleSearch, searchIcon }) => {
  return (
    <nav className='w-full p-3 flex justify-between items-center bg-white shadow'>
      <h3 className='font-bold tracking-wide text-3xl text-gray-700 '>Welcome Back Nicole👋🏼</h3>
      <div className='relative flex-1'>
       
      </div>
      <div className="flex items-center space-x-4">
        <FaEnvelope className="text-gray-500 cursor-pointer" />
        <FaBell className="text-gray-500 cursor-pointer" />
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <FaUser className="text-white" />
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
