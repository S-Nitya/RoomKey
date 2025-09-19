import React, { useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const reviews = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Computer Science Undergraduate",
    review:
      "Super fast WiFi, friendly environment, and prime location. Couldn't ask for a better student housing option!",
    rating: 5,
  },
  {
    id: 2,
    name: "Riya Sharma",
    role: "MBA Student",
    review:
      "The facilities are top-notch, and the community vibe is unmatched. I renewed my stay without a second thought!",
    rating: 5,
  },
  {
    id: 3,
    name: "Kunal Verma",
    role: "Engineering, Graduate Student",
    review:
      "Great value for money. The premium single room gives me the quiet space I need for research, and the common areas are perfect for collaborating with classmates.",
    rating: 4,
  },
  {
    id: 4,
    name: "Priya Nair",
    role: "Architecture Student",
    review:
      "The design of the rooms is modern and functional. Loved the study spaces and the vibrant community atmosphere!",
    rating: 5,
  },
  {
    id: 5,
    name: "Amit Joshi",
    role: "Law Undergraduate",
    review:
      "Calm and secure environment. The 24/7 support and facilities make it the best place to stay during studies.",
    rating: 4,
  },
  {
    id: 6,
    name: "Sneha Kulkarni",
    role: "Medical Student",
    review:
      "Close to my college and has everything I need. The WiFi and community events are a big plus!",
    rating: 5,
  },
];

const stats = [
  { id: 1, value: "4.9/5", label: "Average Rating", color: "text-orange-500" },
  { id: 2, value: "500+", label: "Happy Residents", color: "text-amber-500" },
  { id: 3, value: "95%", label: "Renewal Rate", color: "text-red-600" },
];

const ReviewsPage = () => {
  const [newReview, setNewReview] = useState({
    name: "",
    role: "",
    review: "",
    rating: 5,
  });

  const [reviewsList, setReviewsList] = useState(reviews);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setNewReview((prevState) => ({
      ...prevState,
      rating,
    }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const newReviewWithId = { ...newReview, id: reviewsList.length + 1 };
    setReviewsList((prevState) => [...prevState, newReviewWithId]);
    setNewReview({ name: "", role: "", review: "", rating: 5 });
  };

  return (
    <div className="min-h-screen relative pt-24">
      <Navbar />
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-dormitory.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{
              background: "linear-gradient(135deg, #F59E0B, #F97316, #B91C1C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            What Our Residents Say
          </motion.h2>
          <motion.p
            className="text-gray-200 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Don't just take our word for it. Hear from the students who call
            RoomKey home.
          </motion.p>
        </motion.div>

        {/* Reviews in Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl w-full mb-16">
          {reviewsList.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 border border-white/20"
            >
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: index * 0.1 + i * 0.05,
                      type: "spring",
                    }}
                  >
                    <Star
                      className={`w-5 h-5 ${
                        i < review.rating ? "text-amber-500" : "text-gray-300"
                      }`}
                      fill={i < review.rating ? "currentColor" : "none"}
                    />
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4 text-sm md:text-base leading-relaxed">
                "{review.review}"
              </p>
              <div className="mt-auto">
                <h4 className="font-bold text-gray-900 mb-1">{review.name}</h4>
                <p className="text-amber-600 text-sm font-medium">
                  {review.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add Review Form */}
        <motion.div
          className="w-full max-w-4xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
              Leave a Review
            </h3>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={newReview.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="role"
                  value={newReview.role}
                  onChange={handleInputChange}
                  placeholder="Your Role (e.g., Student)"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <textarea
                  name="review"
                  value={newReview.review}
                  onChange={handleInputChange}
                  placeholder="Write your review here..."
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div className="flex justify-center space-x-4">
                {[1, 2, 3, 4, 5].map((ratingValue) => (
                  <Star
                    key={ratingValue}
                    className={`w-6 h-6 cursor-pointer ${
                      ratingValue <= newReview.rating
                        ? "text-amber-500"
                        : "text-gray-300"
                    }`}
                    fill={
                      ratingValue <= newReview.rating ? "currentColor" : "none"
                    }
                    onClick={() => handleRatingChange(ratingValue)}
                  />
                ))}
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 mt-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600"
              >
                Submit Review
              </button>
            </form>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/95 backdrop-blur-sm shadow-xl rounded-xl p-6 text-center transition-all duration-300 border border-white/20"
              >
                <motion.div
                  className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewsPage;
