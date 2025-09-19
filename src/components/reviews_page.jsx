import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Computer Science Undergraduate",
    review:
      "Super fast WiFi, friendly environment, and prime location. Couldn’t ask for a better student housing option!",
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
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Our Residents Say
      </motion.h2>
      <motion.p
        className="text-gray-600 mb-12 text-center max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Don’t just take our word for it. Hear from the students who call RoomKey home.
      </motion.p>

      {/* Reviews in Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <div className="flex justify-center mb-3">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating ? "text-amber-500" : "text-gray-300"
                  }`}
                  fill={i < review.rating ? "currentColor" : "none"}
                />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">“{review.review}”</p>
            <h4 className="font-semibold text-gray-900">{review.name}</h4>
            <p className="text-gray-500 text-sm">{review.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-4xl w-full">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-xl p-6 text-center transform hover:scale-105 transition duration-300"
          >
            <div className={`text-2xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
            <p className="text-gray-600 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;