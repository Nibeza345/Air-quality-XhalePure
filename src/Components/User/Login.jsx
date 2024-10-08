import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import image1 from "../../assets/home/image1.jpg";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      console.log("Sending credentials:", { email });
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      console.log("Response:", response);
      console.log("Token:", response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password"); 
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <nav className="p-4 bg-gray-800 bg-opacity-75 text-white">
        <Link to="/" className="flex items-center justify-center w-full">
          <FaArrowLeft className="mr-2" />
          <span>Back to Home</span>
        </Link>
      </nav>

      <form
        onSubmit={handleLogin}
        className="flex-grow flex items-center justify-center"
      >
        <div className="bg-white p-6 rounded shadow-md w-80">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-1" htmlFor="password">
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
              className="absolute inset-y-0 right-3 top-8 flex items-center cursor-pointer"
            >
              {showPassword ? <FaEye/> : <FaEyeSlash/>}
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
