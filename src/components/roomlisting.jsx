import React, { useState } from "react";
import { ChevronDown, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const RoomsPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [roomTypeFilter, setRoomTypeFilter] = useState("All Rooms");
  const [priceFilter, setPriceFilter] = useState("Price: Low to High");

  const rooms = [
    {
      id: 1,
      title: "Triple Sharing",
      price: 7500,
      description: "Budget-friendly triple sharing with bunk beds",
      status: "Full",
      image: "/images/triple-1.jpg",
    },
    {
      id: 2,
      title: "Double Sharing",
      price: 9500,
      description: "Comfortable double sharing room with beds",
      status: "Available",
      image: "/images/double-1.jpg",
    },
    {
      id: 3,
      title: "Single Room",
      price: 13000,
      description: "Spacious single room with private bathroom",
      status: "Available",
      image: "/images/single-1.jpg",
    },
  ];

  // Filter rooms based on room type
  const filteredRooms = rooms.filter((room) => {
    if (roomTypeFilter === "All Rooms") return true;
    return room.title.includes(roomTypeFilter);
  });

  // Sort rooms based on price filter
  const sortedRooms = filteredRooms.sort((a, b) => {
    if (priceFilter === "Price: Low to High") {
      return a.price - b.price;
    } else if (priceFilter === "Price: High to Low") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 pt-24">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Find Your Perfect Room
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Choose from our variety of comfortable, well-equipped rooms designed
            for modern student living
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
          {sortedRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Room Image section now uses an <img> tag */}
              <div className="relative h-48 lg:h-56">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover"
                />

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {room.status === "Available" ? (
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
                      ₹{room.price.toLocaleString("en-IN")}
                    </div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 font-inter leading-relaxed">
                  {room.description}
                </p>

                {/* Action Button */}
                <Link
                  to="/listings"
                  className={`w-full h-14 flex items-center justify-center rounded-xl font-semibold text-base md:text-lg transition-all duration-300 mt-2 mb-1 px-2 ${
                    room.status === "Available"
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 hover:shadow-lg transform hover:scale-105"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {room.status === "Available"
                    ? "View Details"
                    : "Currently Full"}
                </Link>
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
    </div>
  );
};

export default RoomsPage;
