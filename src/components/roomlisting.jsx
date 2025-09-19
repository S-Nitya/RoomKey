import React from 'react';
import { ChevronDown, Menu, Camera } from 'lucide-react';

const RoomsPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [roomTypeFilter, setRoomTypeFilter] = React.useState('All Rooms');
  const [priceFilter, setPriceFilter] = React.useState('Price: Low to High');

  // CHANGED: Prices reduced for student affordability
  const rooms = [
    {
      id: 1,
      title: "Triple Sharing",
      price: 7500, // Price in INR
      description: "Budget-friendly triple sharing with bunk beds",
      status: "Full",
      image: "/images/triple-1.jpg" // Path relative to the public folder
    },
    {
      id: 2,
      title: "Double Sharing",
      price: 9500, // Price in INR
      description: "Comfortable double sharing room with twin beds",
      status: "Available",
      image: "/images/double-1.jpg" // Path relative to the public folder
    },
    {
      id: 3,
      title: "Single Room",
      price: 13000, // Price in INR
      description: "Spacious single room with private bathroom",
      status: "Available",
      image: "/images/single-1.jpg" // Path relative to the public folder
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
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
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 text-sm lg:text-base">Room Listings</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 text-sm lg:text-base">Photo Gallery</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 text-sm lg:text-base">Location</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 text-sm lg:text-base">Reviews</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 text-sm lg:text-base">FAQ</a>
              <a href="#" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 text-sm lg:text-base">Contact</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 lg:px-6 py-2 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-colors duration-200 text-sm lg:text-base">
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-amber-600"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-100 z-50">
              <div className="px-4 py-2 space-y-1">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md font-medium">Room Listings</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md font-medium">Photo Gallery</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md font-medium">Location</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md font-medium">Reviews</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md font-medium">FAQ</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md font-medium">Contact</a>
                <div className="pt-2 pb-2">
                  <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg font-semibold">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Find Your Perfect Room
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Choose from our variety of comfortable, well-equipped rooms designed for modern student living
          </p>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
          
          {/* Room Type Filter */}
          <div className="relative">
            <select 
              value={roomTypeFilter}
              onChange={(e) => setRoomTypeFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 min-w-[200px]"
            >
              <option value="All Rooms">All Rooms</option>
              <option value="Single Room">Single Room</option>
              <option value="Double Sharing">Double Sharing</option>
              <option value="Triple Sharing">Triple Sharing</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          {/* Price Filter */}
          <div className="relative">
            <select 
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 min-w-[200px]"
            >
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Most Popular">Most Popular</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              
              {/* Room Image section now uses an <img> tag */}
              <div className="relative h-48 lg:h-56">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {room.status === 'Available' ? (
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                      ✓ Available
                    </span>
                  ) : (
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                      ✕ Full
                    </span>
                  )}
                </div>

                {/* Image Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Camera className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-poppins">
                    {room.title}
                  </h3>
                  <div className="text-right">
                    {/* Price symbol updated to INR (₹) */}
                    <div className="text-2xl lg:text-3xl font-bold text-amber-600">
                      ₹{room.price.toLocaleString('en-IN')}
                    </div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 font-inter leading-relaxed">
                  {room.description}
                </p>

                {/* Action Button */}
                <button 
                  className={`w-full py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    room.status === 'Available' 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 hover:shadow-lg transform hover:scale-105' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={room.status !== 'Available'}
                >
                  {room.status === 'Available' ? 'View Details' : 'Currently Full'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-amber-500 text-amber-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-amber-50 hover:shadow-lg transition-all duration-300">
            Load More Rooms
          </button>
        </div>
      </div>

      {/* Font styles moved to index.html */}
    </div>
  );
};

export default RoomsPage;