'use client';
// components/Card.js
import React from "react";
import { motion } from "framer-motion";

const TabCard = ({title, content}) => {
    const cardVariants = {
        hidden: { opacity: 0, x: -50 }, // Initial state (hidden)
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Visible state
      };
  return (
    <motion.div
      className="bg-transparent backdrop-blur-lg rounded-lg shadow-md p-4 m-4"
      whileHover={{ scale: 1.05 }}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-xl text-white font-semibold mb-2">{title}</h2>
      <p className="text-white">
       {content}
      </p>
    </motion.div>
  );
};

export default TabCard;
