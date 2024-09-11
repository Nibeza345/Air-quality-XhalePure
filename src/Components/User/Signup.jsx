import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import { FaArrowLeft,FaEye, FaEyeSlash } from "react-icons/fa";
import image3 from "../../assets/home/image3.jpg";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    location: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validation = () => {
    const newErrors = {};
    const { email, phoneNumber, password, confirmPassword } = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    const phoneRegex = /^07\d{8}$/;
    if (!phoneRegex.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits and start with 07";
    }

    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validation()) {
      return;
    }

    const { username, email, location, phoneNumber, password } = formData;

    try {
      const response = await axios.post("http://localhost:3000/signup", {
        username,
        email,
        location,
        phoneNumber,
        password,
      });
      console.log("Response:", response);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

 
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image3})` }}
    >
      <nav className="p-4 bg-gray-800 bg-opacity-75 text-white">
        <Link to="/" className="flex items-center justify-center w-full">
          <FaArrowLeft className="mr-2" />
          <span>Back to Home</span>
        </Link>
      </nav>
      <form
        onSubmit={handleSignup}
        className="flex-grow flex items-center justify-center"
      >
        <div className="bg-white p-6 rounded shadow-md w-80">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-800 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />} 
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="mb-4 relative">
            <label
              className="block text-gray-700 mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <span
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-1 right-0 pr-3 flex items-center cursor-pointer"
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />} 
            </span>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
