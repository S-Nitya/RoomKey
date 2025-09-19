import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

export default function DormitoryInquiryForm() {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    
    // Redirect to the landing page after form submission
    setTimeout(() => {
      navigate("/"); // Redirects to the homepage (RoomKeyLanding)
    }, 2000); // Delay for 2 seconds to show the confirmation message
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-400 via-pink-500 to-red-800 px-6 relative overflow-hidden">
        {/* Animated Sunset Glow Effect */}
        <style>
          {`
            @keyframes pulse-glow {
              0%, 100% {
                transform: scale(1) translate(-50%, -50%);
                opacity: 0.7;
              }
              50% {
                transform: scale(1.2) translate(-50%, -50%);
                opacity: 0.9;
              }
            }
          `}
        </style>
        <div className="absolute top-1/4 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full filter blur-3xl opacity-70 animate-pulse-glow z-0"
             style={{ background: 'radial-gradient(circle, rgba(255,200,100,0.8), transparent)' }}>
        </div>
        <div className="max-w-lg w-full bg-white rounded-xl shadow-2xl p-10 text-center relative z-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank you!</h2>
          <p className="text-gray-600">
            Your inquiry has been submitted. We will review your details and contact you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-400 via-pink-500 to-red-800 py-12 px-6 relative overflow-hidden">
      {/* Animated Sunset Glow Effect */}
      <style>
          {`
            @keyframes pulse-glow {
              0%, 100% {
                transform: scale(1) translate(-50%, -50%);
                opacity: 0.7;
              }
              50% {
                transform: scale(1.2) translate(-50%, -50%);
                opacity: 0.9;
              }
            }
          `}
      </style>
      <div className="absolute top-1/4 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full filter blur-3xl opacity-70 animate-pulse-glow z-0"
           style={{ background: 'radial-gradient(circle, rgba(255,200,100,0.8), transparent)' }}>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-12 relative z-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Dormitory Inquiry Form
        </h1>
        <p className="text-center text-gray-500 mb-12">
          Fill out the form to help us find your ideal living situation.
        </p>

        <form onSubmit={handleSubmit} className="space-y-16">
          {/* Personal Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-8">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-10">
              <Input label="Full Name" name="fullName" onChange={handleChange} required />
              <Input label="Student ID" name="studentId" type="number" onChange={handleChange} required />
              <Input label="Email" name="email" type="email" onChange={handleChange} required />
              <Input label="Phone Number" name="phone" type="tel" onChange={handleChange} />
              <Input label="College Name" name="collegeName" onChange={handleChange} required />
            </div>
          </section>

          {/* Parent Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-8">
              Parent’s Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-10">
              <Input label="Father's Name" name="fatherName" onChange={handleChange} required />
              <Input label="Mother's Name" name="motherName" onChange={handleChange} required />
              <Input label="Father's Email" name="fatherEmail" type="email" onChange={handleChange} />
              <Input label="Mother's Email" name="motherEmail" type="email" onChange={handleChange} />
              <Input label="Father's Phone" name="fatherPhone" type="tel" onChange={handleChange} />
              <Input label="Mother's Phone" name="motherPhone" type="tel" onChange={handleChange} />
              <Input label="Permanent Address" name="permanentAddress" onChange={handleChange} required />
              <Input label="Current Address" name="currentAddress" onChange={handleChange} />
            </div>
          </section>

          {/* Preferences */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-8">
              Roommate & Lifestyle Preferences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-10">
              <Select label="Room Type" name="roomType" onChange={handleChange} options={["Single", "Double", "Suite"]} />
              <Select label="Cleanliness Habits" name="cleanliness" onChange={handleChange} options={["Always Clean", "Slightly Cluttered", "Messy"]} />
              <Select label="Preferred Roommate?" name="preferredRoommate" onChange={handleChange} options={["Yes", "No"]} />
              <Input label="Roommate's Name (if any)" name="roommateName" onChange={handleChange} />
            </div>
          </section>

          {/* Health */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-8">
              Special Accommodations
            </h2>
            <textarea
              name="accommodations"
              onChange={handleChange}
              rows="4"
              placeholder="E.g. allergies, medical needs..."
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
            />
          </section>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="px-10 py-4 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition transform hover:scale-105"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* Reusable components */
function Input({ label, name, type = "text", onChange, required }) {
  return (
    <div>
      <label className="block text-base font-medium text-gray-700 mb-3">{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
}

function Select({ label, name, options, onChange }) {
  return (
    <div>
      <label className="block text-base font-medium text-gray-700 mb-3">{label}</label>
      <select
        name={name}
        onChange={onChange}
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
      >
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
