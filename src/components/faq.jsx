import React, { useState } from "react";
import { ChevronDown, Search, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const faqs = [
  {
    id: 1,
    category: "Booking",
    question: "How do I book a room at RoomKey?",
    answer:
      "You can book a room directly through our website by clicking the 'Book Now' button and following the simple steps.",
  },
  {
    id: 2,
    category: "Pricing",
    question: "What is included in the monthly rent?",
    answer:
      "The monthly rent includes utilities such as water, electricity, and WiFi, as well as access to common areas and facilities.",
  },
  {
    id: 3,
    category: "Facilities",
    question: "What amenities are available?",
    answer:
      "Our amenities include fully furnished rooms, high-speed WiFi, study lounges, fitness center, and laundry facilities.",
  },
  {
    id: 4,
    category: "Policies",
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made 30 days before move-in are eligible for a full refund. After that, partial charges may apply.",
  },
  {
    id: 5,
    category: "Living",
    question: "Can I have guests over?",
    answer:
      "Yes, residents may have guests, but overnight stays may be subject to prior approval and certain restrictions.",
  },
  {
    id: 6,
    category: "Facilities",
    question: "Is parking available?",
    answer:
      "Yes, we offer secure parking spaces for residents at an additional cost.",
  },
  {
    id: 7,
    category: "Living",
    question: "What are the house rules?",
    answer:
      "House rules include quiet hours, cleanliness in shared spaces, and respect for fellow residents.",
  },
  {
    id: 8,
    category: "Booking",
    question: "When can I move in?",
    answer:
      "Move-in dates are flexible and will be confirmed after booking, typically at the start of academic terms.",
  },
  {
    id: 9,
    category: "Facilities",
    question: "How is maintenance handled?",
    answer:
      "We have an on-site maintenance team available 24/7. Requests can be submitted through our resident portal.",
  },
  {
    id: 10,
    category: "Pricing",
    question: "Are there any additional fees?",
    answer:
      "Additional fees may include parking, optional cleaning services, or late payment charges.",
  },
];

const categories = [
  "All",
  "Booking",
  "Pricing",
  "Facilities",
  "Living",
  "Policies",
];

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook for redirection

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch = faq.question
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle navigating back to the Landing Page
  const handleBackToLanding = () => {
    navigate("/"); // Redirect to the RoomKeyLanding page
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
        Frequently Asked Questions
      </motion.h2>
      <motion.p
        className="text-gray-600 mb-10 text-center max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Got questions? We've got answers! Find everything you need to know about
        living at RoomKey.
      </motion.p>

      {/* Search Bar */}
      <div className="relative w-full max-w-xl mb-8">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === cat
                ? "bg-amber-500 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div className="w-full max-w-3xl space-y-4">
        {filteredFaqs.map((faq, i) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left text-gray-800 font-medium hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-500" />
                {faq.question}
              </div>
              <ChevronDown
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === i
                    ? "rotate-180 text-amber-500"
                    : "text-gray-400"
                }`}
              />
            </button>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-5 pb-4 text-gray-600"
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Back to Landing Page Button */}
      <div className="mt-8">
        <button
          onClick={handleBackToLanding}
          className="px-6 py-3 bg-amber-500 text-white rounded-lg shadow hover:bg-amber-600 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default FAQPage;
