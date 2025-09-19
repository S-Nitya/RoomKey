import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Menu } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
    <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-32">
      <div className="flex items-center justify-between h-20 min-h-[5rem] gap-4 flex-wrap">
        {/* Logo as a clickable link */}
        <div className="flex items-center">
          <Link
            to="/" // Redirect to the landing page when clicked
            className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-poppins"
          >
            RoomKey
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12 xl:space-x-16 2xl:space-x-20">
          <Link
            to="/listings"
            className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
          >
            Room Listings
          </Link>
          <Link
            to="/gallery"
            className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
          >
            Photo Gallery
          </Link>
          <Link
            to="/location"
            className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
          >
            Location
          </Link>
          <Link
            to="/reviews"
            className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
          >
            Reviews
          </Link>
          <Link
            to="/faq"
            className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button - Link to the contact page */}
        <div className="hidden md:flex ml-6">
          <Link
            to="/contact" // Redirect to the contact page
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold text-base shadow-md hover:from-amber-600 hover:to-orange-600 transition-colors duration-200"
          >
            Book Now
          </Link>
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
);

export default Navbar;
