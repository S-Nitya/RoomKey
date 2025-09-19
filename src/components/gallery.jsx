import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const PhotoGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All Photos");
  const [selectedImage, setSelectedImage] = useState(null);

  // --- UPDATED FILTERS ---
  const filters = [
    { name: "All Photos", count: 16 },
    { name: "Rooms", count: 8 },
    { name: "Common Areas", count: 4 },
    { name: "Recreation", count: 3 },
    { name: "Kitchen", count: 1 },
  ];

  // --- UPDATED GALLERY ITEMS ---
  const galleryItems = [
    // Rooms
    {
      id: 1,
      title: "Comfortable Single Room",
      category: "Rooms",
      image: "/images/single-1.jpg",
    },
    {
      id: 2,
      title: "Well-Lit Single Room",
      category: "Rooms",
      image: "/images/single-2.jpg",
    },
    {
      id: 3,
      title: "Spacious Double Room",
      category: "Rooms",
      image: "/images/double-1.jpg",
    },
    {
      id: 4,
      title: "Modern Double Room Setup",
      category: "Rooms",
      image: "/images/double-2.jpg",
    },
    {
      id: 5,
      title: "Cozy Double Room View",
      category: "Rooms",
      image: "/images/double-3.jpg",
    },
    {
      id: 6,
      title: "Double Room Desk Space",
      category: "Rooms",
      image: "/images/double-4.jpg",
    },
    {
      id: 7,
      title: "Triple Room Layout",
      category: "Rooms",
      image: "/images/triple-2.jpg",
    },
    {
      id: 8,
      title: "Group Living Triple Room",
      category: "Rooms",
      image: "/images/triple-4.jpg",
    },
    // Common Areas
    {
      id: 9,
      title: "Main Common Area",
      category: "Common Areas",
      image: "/images/vibrant-2.webp",
    },
    {
      id: 10,
      title: "Relaxing Common Lounge",
      category: "Common Areas",
      image: "/images/commonArea-2.jpeg",
    },
    {
      id: 11,
      title: "Visitor's Lounge",
      category: "Common Areas",
      image: "/images/visitorLounge.jpeg",
    },
    {
      id: 12,
      title: "Vibrant Common Space",
      category: "Common Areas",
      image: "/images/vibrant-1.webp", // Replaced placeholder image
    },
    // Recreation
    // {
    //   id: 13,
    //   title: "Indoor Games Zone",
    //   category: "Recreation",
    //   image: "/images/play-1.jpeg",
    // },
    {
      id: 14,
      title: "Recreation & Play Area",
      category: "Recreation",
      image: "/images/play-2.webp",
    },
    {
      id: 15,
      title: "Fun Activities Space",
      category: "Recreation",
      image: "/images/play-3.jpeg",
    },
    {
      id: 16,
      title: "Leisure and Games",
      category: "Recreation",
      image: "/images/play-4.jpeg",
    },
    // Kitchen
    {
      id: 17,
      title: "Shared Kitchen Facility",
      category: "Kitchen",
      image: "/images/kitchen.jpg",
    },
  ];

  const filteredItems =
    activeFilter === "All Photos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const filterVariants = {
    inactive: { scale: 1, backgroundColor: "transparent" },
    active: {
      scale: 1.05,
      backgroundColor: "#F59E0B",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 pt-24">
      <Navbar />
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center py-12 md:py-16 px-4"
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          style={{
            background: "linear-gradient(135deg, #F59E0B, #F97316, #B91C1C)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Photo Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Take a virtual tour of our modern facilities and comfortable living
          spaces
        </motion.p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-2 md:gap-4 px-4 mb-8 md:mb-12"
      >
        {filters.map((filter) => (
          <motion.button
            key={filter.name}
            variants={filterVariants}
            animate={activeFilter === filter.name ? "active" : "inactive"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter(filter.name)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 border-2 flex items-center gap-2 text-sm md:text-base ${
              activeFilter === filter.name
                ? "bg-amber-500 text-white border-amber-500 shadow-lg shadow-amber-500/30"
                : "text-gray-700 border-gray-300 hover:border-amber-400 hover:text-amber-600 bg-white"
            }`}
          >
            <span>{filter.name}</span>
            <motion.span
              className={`px-2 py-1 rounded-full text-xs font-bold ${
                activeFilter === filter.name
                  ? "bg-white text-amber-500"
                  : "bg-gray-100 text-gray-600"
              }`}
              layout
            >
              {filter.count}
            </motion.span>
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 sm:h-56 md:h-48 lg:h-52 xl:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </motion.div>
                  </div>
                  <motion.div
                    className="p-4 md:p-5"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="font-bold text-sm md:text-lg text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>
                    <span className="inline-block px-2 py-1 md:px-3 text-xs font-medium rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 border border-amber-200">
                      {item.category}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal for Selected Image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl p-6 max-w-4xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    {selectedImage.title}
                  </h2>
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 border border-amber-200">
                    {selectedImage.category}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedImage(null)}
                  className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-8 right-8"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PhotoGallery;
