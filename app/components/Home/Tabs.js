"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import TabCard from "../card/TabCard";
let tabs = [
  {
    id: 1,
    label: "Alkyd Resins",
    content:'Long Oil Alkyds | medium oil alkyds | short oil alkyds | modified alkyds| rosinated alkyds.',
  },
  {
    id: 2,
    label: "Amino Resins",
    content:'Melamine formaldehyde resins | Urea formaldehyde resins.',
  },
  {
    id: 3,
    label: "Hard Resins",
    content:'Maleic modified rosin penta ester | Maleic modified rosin glycerine ester.',
  },
];

const Tabs = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  const tabVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };
  return (
    <div className="w-full sm:w-1/2 mx-auto relative mt-10">
      <div className="flex relative left-[-22px] space-x-3 sm:space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "bg-purple-500" : "hover:opacity-50"
            } relative md:left-[10%] left-5 rounded-full  px-3 py-1.5 md:text-xl text-md mr-5 font-medium text-white outline-2 outline-sky-400 transition focus-visible:outline`}
            style={{
              borderRadius: 9999,
            }}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-purple-500 rounded-full"
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
        {activeTab === 1 && <TabCard title={tabs[0].label} content={tabs[0].content} />}
        {activeTab === 2 && <TabCard title={tabs[1].label} content={tabs[1].content} />}
        {activeTab === 3 && <TabCard title={tabs[2].label} content={tabs[2].content} />}
      </motion.div>
    </div>
  );
};

export default Tabs;
