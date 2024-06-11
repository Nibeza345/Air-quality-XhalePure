import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import image2 from '../assets/home/image2.jpg';

const Contact = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image2})` }}>
      <nav className="flex justify-between items-center p-4 bg-gray-800 bg-opacity-75 text-white">
        <Link to="/" className="flex items-center">
          <FaArrowLeft className="mr-2" />
          <span>Back to Home</span>
        </Link>
      </nav>

      <section className="flex flex-col items-center justify-center py-10 px-4 bg-gray-900 bg-opacity-75 text-white mt-20 mx-auto max-w-4xl rounded-lg">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2">
              <div className="mb-8">
                <i className="fas fa-map-marker-alt text-2xl"></i>
                <div className="mt-2">Location</div>
                <div>Kigali, Rwanda 06</div>
              </div>
              <div className="mb-8">
                <i className="fas fa-phone-alt text-2xl"></i>
                <div className="mt-2">Phone</div>
                <div>+250 798 678 892</div>
              </div>
              <div className="mb-8">
                <i className="fas fa-envelope text-2xl"></i>
                <div className="mt-2">Email</div>
                <div>airquality@managementapp.com</div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="text-3xl font-bold mb-4">Send us a message</div>
              <p className="mb-8">
                "Reach out to us for any inquiries or feedback regarding air quality in your area. We are here to help you breathe easier and live healthier."
              </p>
              <form>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder="Enter your email" 
                    className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
                  />
                </div>
                <div className="mb-4">
                  <textarea 
                    placeholder="Enter your message" 
                    className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="button" 
                    className="w-full p-3 bg-orange-500 text-white rounded hover:bg-orange-600"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

     </div>
  );
}
export default Contact;