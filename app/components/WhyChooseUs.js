'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Collapsible from './Collapsible';
const WhyChooseUs = () => {
  return (
    <section className="w-full mt-20">
    <div className='md:w-1/2 md:mx-auto w-full'>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 bg-white rounded-lg shadow-md"
    >
      {/* Your content goes here */}
      <h2 className="text-3xl font-semibold mb-4">Why Savita Paints Products</h2>
      <p className="text-gray-600">
      Savita Paints is a full service company offering painting solutions and Complete focus on quality and top of the line innovations have prooved to be a hallmark of savita paints growth through the decades.
      </p>
    <Collapsible/>
    </motion.div>
    </div>
    </section>
  );
};

export default WhyChooseUs;
