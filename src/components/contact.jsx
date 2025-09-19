import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentPhone: "",
    studentEmail: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    permanentAddress: "",
    currentAddress: "",
    identityDoc: null, // Aadhar Card
    collegeId: null, // College ID
    roomNeededUntil: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center pt-24">
      <Navbar />
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact & Admission Form
      </motion.h2>
      <motion.p
        className="text-gray-600 mb-10 text-center max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Please fill out the form below with your and your parent's details.
      </motion.p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl space-y-6"
      >
        {/* Student Details */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Student Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Student Name"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <input
              type="tel"
              name="studentPhone"
              value={formData.studentPhone}
              onChange={handleChange}
              placeholder="Student Phone"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <input
              type="email"
              name="studentEmail"
              value={formData.studentEmail}
              onChange={handleChange}
              placeholder="Student Email"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
          </div>
        </div>

        {/* Parent Details */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Parent Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="Parent Name"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <input
              type="tel"
              name="parentPhone"
              value={formData.parentPhone}
              onChange={handleChange}
              placeholder="Parent Phone"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <input
              type="email"
              name="parentEmail"
              value={formData.parentEmail}
              onChange={handleChange}
              placeholder="Parent Email"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
          </div>
        </div>

        {/* Address Details */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Address Details
          </h3>
          <textarea
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            placeholder="Parent's Permanent Address"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-400 mb-4"
            rows="3"
            required
          ></textarea>
          <textarea
            name="currentAddress"
            value={formData.currentAddress}
            onChange={handleChange}
            placeholder="Parent's Current Address"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Time Needed for the Room */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Time Needed for the Room
          </h3>
          <input
            type="datetime-local"
            name="roomNeededUntil"
            value={formData.roomNeededUntil}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
        </div>

        {/* File Uploads (Aadhar Card and College ID) */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Upload Documents
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="file"
              name="identityDoc"
              onChange={handleChange}
              accept=".jpg,.jpeg,.png,.pdf"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <label className="text-sm text-gray-600">Upload Aadhar Card</label>

            <input
              type="file"
              name="collegeId"
              onChange={handleChange}
              accept=".jpg,.jpeg,.png,.pdf"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <label className="text-sm text-gray-600">Upload College ID</label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-colors duration-200"
          >
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
