import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const ScheduleTourPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    roomType: '',
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const roomTypes = [
    'Single Room', 'Double Room', 'Triple Room'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTimeSlotSelect = (time) => {
    setSelectedTimeSlot(time);
    setFormData(prev => ({
      ...prev,
      preferredTime: time
    }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.preferredDate || !selectedTimeSlot) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-xl text-center transform animate-bounce-in">
          <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">Tour Scheduled!</h2>
          <p className="text-gray-600 mb-6 font-inter">
            Your tour has been scheduled successfully. We'll send you a confirmation email shortly with all the details.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
          >
            Schedule Another Tour
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-2/3 h-full">
          <div className="absolute top-20 right-20 w-80 h-60 bg-white rounded-lg shadow-lg opacity-20 transform rotate-12"></div>
          <div className="absolute top-40 right-40 w-96 h-72 bg-gray-300 rounded-lg shadow-lg opacity-15 transform rotate-6"></div>
          <div className="absolute bottom-32 right-10 w-72 h-48 bg-gray-200 rounded-lg shadow-lg opacity-20 transform -rotate-3"></div>
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={() => navigate('/')} // Navigate to landing page on click
                className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-poppins">
                RoomKey
              </span>
            </div>
            {/* Remove this line */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* Page Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            <span className="inline bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Schedule Your Personal Tour
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Take a guided tour of our facilities and find your perfect room. 
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
          <div className="space-y-6">
            
            {/* Personal Information Section */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins flex items-center">
                <User className="w-5 h-5 mr-2 text-amber-500" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 font-inter">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 font-inter">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 font-inter">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 font-inter">Room Type Interest</label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select room type</option>
                    {roomTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Tour Scheduling Section */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-amber-500" />
                Select Date & Time
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 font-inter">Preferred Date *</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 font-inter flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Preferred Time *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleTimeSlotSelect(time)}
                        className={`p-2 text-sm rounded-lg border-2 transition-all duration-200 ${
                          selectedTimeSlot === time
                            ? 'border-amber-500 bg-amber-50 text-amber-700'
                            : 'border-gray-300 hover:border-amber-300 hover:bg-amber-50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 font-poppins">Additional Information</h3>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 font-inter">Special Requests or Questions</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  placeholder="Any specific rooms you'd like to see or questions you have..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:from-amber-600 hover:to-orange-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule My Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTourPage;
