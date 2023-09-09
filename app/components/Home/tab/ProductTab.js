"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Product from "../tab/Product";
let tabs = [
  {
    id: 1,
    label: "Industrial Coating",
  },
  {
    id: 2,
    label: "Decorative Coating",
  },
  {
    id: 3,
    label: "Wood Coating",
  },
];

const IndustrialCoating  = [
  {
    image:'https://www.savitapaints.com/assets/images/auto.jpg',
  },
  {
    image:'https://www.savitapaints.com/assets/images/3.jpg',
  },
  {
    image:'https://www.savitapaints.com/assets/images/furniture.jpg',
  },
  {
    image:'https://www.savitapaints.com/assets/images/harmotone.jpg',
  }
]

const WoodCoating  = [
  {
    image:'https://www.savitapaints.com/assets/images/acrylic.jpg',
  },
  {
    image:'https://www.savitapaints.com/assets/images/bloom.jpg',
  },
  {
    image:'https://www.savitapaints.com/assets/images/tuberx.jpg',
  },
  {
    image:'https://www.savitapaints.com/assets/images/turbo.jpg',
  }
]

const DecorativeCoating  = [
  {
    image:'https://www.savitapaints.com/assets/images/glossy.jpg',
  },
  {
    image:'https://www.savitapaints.com/assets/images/melamine.jpg',
  },
  {
    image:'https://www.savitapaints.com/assets/images/sanding.jpg',
  },
  {
    image:'https://www.savitapaints.com/assets/images/liqure.jpg',
  }
]

const ProductTabs = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  const tabVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };
  return (
    <div className="w-full sm:w-1/2 mx-auto mt-10">
      <div className="flex space-x-3 sm:space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "bg-orange-500" : "hover:opacity-50"
            } relative rounded-full  px-3 py-1.5 md:text-xl text-md font-medium text-black outline-2 outline-sky-400 transition focus-visible:outline`}
            style={{
              borderRadius: 9999,
            }}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-orange-500 rounded-full"
              />
            )}

            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
      <motion.div
        className="mt-4"
        initial="hidden"
        animate="visible"
        variants={tabVariants}
      >
        {activeTab === 1 && <Product product={IndustrialCoating}  />}
        {activeTab === 2 && <Product product={DecorativeCoating}  />}
        {activeTab === 3 && <Product product={WoodCoating}  />}
      </motion.div>
      
    </div>
  );
};

export default ProductTabs;
