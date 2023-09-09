"use client";
// components/ProductCard.js
import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({title, content,image}) => {
  return (
      <div className="relative pl-4 pr-4 mt-2">
        <div>
          <img src={image} className="rounded-lg" />
        </div>
        <motion.div className="absolute bottom-[-40px] left-10 w-[80%]  p-5 bg-transparent backdrop-blur-lg rounded-lg shadow-lg md:mb-0 mb-10"
        whileHover={{ scale: 1.05 }}
        >
          <h1 className="text-center font-bold text-xl">{title}</h1>
          <p className="text-center text-sm text-black">{content}</p>
        </motion.div>
      </div>
  );
};

export default ServiceCard;
