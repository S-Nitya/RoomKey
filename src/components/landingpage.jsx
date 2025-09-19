import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import Chatbot from "./Chatbot"; // Import Chatbot component

const RoomKeyLanding = () => {
  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      <Navbar />

      {/* Hero Content */}
      <div
        className="relative bg-cover bg-center min-h-[75vh] lg:min-h-[80vh]"
        style={{ backgroundImage: "url('/images/hero-dormitory.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200/90 via-gray-100/70 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16 pb-16 lg:pb-20">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[75vh] lg:min-h-[80vh]">
            <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 lg:pr-16 max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 lg:mb-8">
                <span className="block text-gray-900 font-poppins">
                  Your Perfect
                </span>
                <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-poppins">
                  Student Home
                </span>
                <span className="block text-gray-700 font-poppins">Awaits</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 lg:mb-12 leading-relaxed font-inter max-w-lg">
                Discover comfortable, affordable dormitory living in the heart
                of the city. Modern amenities, supportive community, and
                unbeatable location for your academic journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 lg:mb-12">
                <Link
                  to="/listings" // Redirect to the room listings page
                  className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg shadow-lg hover:from-amber-600 hover:to-orange-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <span>Explore Rooms</span>
                  <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/schedule" // Redirect to the schedule tour page
                  className="group bg-white text-gray-800 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg border-2 border-gray-300 hover:border-amber-400 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Schedule Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot only on Landing */}
      <Chatbot />

      {/* Styling for Chatbot */}
      <style jsx>{`
        .chatbot-container {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 50;
        }
      `}</style>
    </div>
  );
};

export default RoomKeyLanding;
