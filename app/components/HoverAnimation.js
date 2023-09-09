"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
const HoverAnimation = ({ children }) => {
  const controls = useAnimation();

  const handleHover = () => {
    controls.start({ scale: 1.05, y: -10 });
  };

  const handleHoverExit = () => {
    controls.start({ scale: 1, y: 0 });
  };
  return (
    <motion.div
      className="cursor-pointer"
      whileHover={{ scale: 1.05, y: -10, zIndex: 1 }}
      onHoverStart={handleHover}
      onHoverEnd={handleHoverExit}
      initial={{ scale: 1, y: 0 }}
      animate={controls}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default HoverAnimation;
