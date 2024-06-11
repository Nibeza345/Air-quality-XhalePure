import React from "react";
import { FaSearch, FaEnvelope, FaBell, FaUser } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ input, setInput, handleSearch, searchIcon }) => {
  return (
    <nav className='w-full p-3 flex justify-between items-center bg-white shadow'>
      <Link to="/dashboard" className="flex items-center">
          <FaArrowLeft className="mr-2 bg-black" />
          
        </Link>
      <h1 className='font-bold tracking-wide text-3xl text-gray-700 '>Weather App</h1>
      <div className='relative flex-1'>
        <input 
          type="text" 
          className='focus:outline-none w-full sm:w-48 pl-10 pr-4 ml-40 mr-6 py-2 bg-white text-gray-800 placeholder-gray-400 shadow-lg' 
          placeholder="Search location"
          value={input} 
          onChange={e => setInput(e.target.value)} 
        />
       <FaSearch 
          className="absolute left-3 top-3 h-6 w-6 text-gray-300 cursor-pointer ml-40 mr-30 " 
          onClick={handleSearch} 
        />
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

export default Header;
