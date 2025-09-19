import React from 'react';
import { ArrowRight, MapPin, Users, Wifi, Shield, Menu } from 'lucide-react';

const RoomKeyLanding = () => {
  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      
      {/* Navbar */}
      <nav className="relative z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-poppins">
                RoomKey
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200">Room Listings</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200">Photo Gallery</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200">Location</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200">Reviews</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200">FAQ</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200">Contact</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-colors duration-200">
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button className="text-gray-700 hover:text-amber-600">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative">
        {/* Background Image Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200/90 via-gray-100/70 to-transparent"></div>
          {/* Background architectural elements simulation */}
          <div className="absolute right-0 top-0 w-2/3 h-full">
            <div className="absolute top-20 right-20 w-80 h-60 bg-white rounded-lg shadow-lg opacity-30 transform rotate-12"></div>
            <div className="absolute top-40 right-40 w-96 h-72 bg-gray-300 rounded-lg shadow-lg opacity-20 transform rotate-6"></div>
            <div className="absolute bottom-32 right-10 w-72 h-48 bg-gray-200 rounded-lg shadow-lg opacity-25 transform -rotate-3"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16 pb-16 lg:pb-20">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[75vh] lg:min-h-[80vh]">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 lg:pr-16 max-w-2xl mx-auto lg:mx-0">
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 lg:mb-8">
                <span className="block text-gray-900 font-poppins">Your Perfect</span>
                <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-poppins">Student Home</span>
                <span className="block text-gray-700 font-poppins">Awaits</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 lg:mb-12 leading-relaxed font-inter max-w-lg">
                Discover comfortable, affordable dormitory living in the heart of the city. Modern amenities, supportive community, and unbeatable location for your academic journey.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 lg:mb-12">
                <button className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg shadow-lg hover:from-amber-600 hover:to-orange-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <span>Explore Rooms</span>
                  <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="group bg-white text-gray-800 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg border-2 border-gray-300 hover:border-amber-400 shadow-md hover:shadow-lg transition-all duration-300">
                  Schedule Tour
                </button>
              </div>

              {/* Feature Icons Row */}
              <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-3 lg:gap-6">
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-amber-500 rounded-full"></div>
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-gray-700">Fully Furnished</span>
                </div>
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="w-3 h-3 lg:w-4 lg:h-4 text-orange-600" />
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-gray-700">Vibrant Community</span>
                </div>
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-3 h-3 lg:w-4 lg:h-4 text-red-700" />
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-gray-700">Prime Location</span>
                </div>
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <Wifi className="w-3 h-3 lg:w-4 lg:h-4 text-amber-600" />
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-gray-700">High-Speed WiFi</span>
                </div>
              </div>
            </div>

            {/* Right Content - Stats Cards */}
            <div className="flex-1 lg:pl-12 w-full max-w-lg mx-auto lg:max-w-none">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                
                {/* Stats Card 1 */}
                <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl lg:text-3xl font-bold text-amber-500 mb-1">500+</div>
                  <div className="text-gray-600 font-medium text-xs lg:text-sm">Happy Residents</div>
                </div>

                {/* Stats Card 2 */}
                <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl lg:text-3xl font-bold text-orange-500 mb-1">4.9</div>
                  <div className="text-gray-600 font-medium text-xs lg:text-sm">Average Rating</div>
                </div>

                {/* Stats Card 3 */}
                <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl lg:text-3xl font-bold text-red-700 mb-1">24/7</div>
                  <div className="text-gray-600 font-medium text-xs lg:text-sm">Security</div>
                </div>

                {/* Stats Card 4 */}
                <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl lg:text-3xl font-bold text-amber-500 mb-1">150+</div>
                  <div className="text-gray-600 font-medium text-xs lg:text-sm">Available Rooms</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-amber-400 rounded-full flex justify-center">
            <div className="w-1 h-2 lg:h-3 bg-amber-400 rounded-full mt-1 lg:mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Font styles moved to index.html */}
    </div>
  );
};

export default RoomKeyLanding;