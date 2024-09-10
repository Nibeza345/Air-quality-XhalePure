import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./Components/Home/Home";
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";
import Dashboard from "./Components/Dashboard";
import Weather from "./Components/Weather";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import AboutUs from "./Components/About";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = false;

  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="Weather" element={<Weather/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/About" element={<AboutUs/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
