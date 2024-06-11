import React from "react";
import { Link } from "react-router-dom";
import Image1 from '../assets/home/image1.jpg'
import { FaArrowLeft } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Image1})` }}>
      <nav className="flex justify-between items-center p-4 bg-gray-800 bg-opacity-75 text-white">
        <Link to="/" className="flex items-center">
          <FaArrowLeft className="mr-2" />
          <span>Back to Home</span>
        </Link>
      </nav>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 p-6">
            <div className="bg-gray-100 p-6 rounded-full shadow-lg">
              <h4 className="text-2xl font-bold mb-2" >Our Mission</h4>
              <p>
                Our mission at Air Quality Management is to improve air quality
                by providing innovative solutions for monitoring and managing
                air pollution. We aim to protect public health and the
                environment by delivering accurate and real-time air quality
                data to our clients.
              </p>
            </div>
          </div>
          <div className="md:w-1/3 p-6">
            <div className="bg-gray-100 p-6 rounded-full shadow-lg">
              <h4 className="text-2xl font-bold mb-2">Our Vision</h4>
              <p>
                We envision a world where everyone has access to clean air.
                Through our cutting-edge technology and dedication to
                excellence, we strive to be the leading provider of air quality
                management services. Our commitment is to create healthier
                environments and enhance the quality of life for communities
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
  );
}
export default AboutUs;