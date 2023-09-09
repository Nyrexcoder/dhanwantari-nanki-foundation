"use client";
// components/ProductCard.js
import React from "react";
import { motion } from "framer-motion";
import HoverAnimation from './HoverAnimation';
const Product = ({ product }) => {
    const cardVariants = {
        hidden: { opacity: 0, x: -50 }, // Initial state (hidden)
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Visible state
      };
  return (
    
      <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible" className="container pl-4 pr-4 mt-5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {
            product.map((product,index) => (
               // eslint-disable-next-line react/jsx-key
               <HoverAnimation><img className="w-full rounded-lg shadow-lg shadow-orange-200" src={product.image} key={index} /></HoverAnimation> 
            ))
        }
      </motion.div>
   
  );
};

export default Product;
