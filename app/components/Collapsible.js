import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const collapse = [
  {
    ques: "MORE THAN 1000 SHADES",
    ans: "For waterbase,synthetic & furniture enamels,autorefinish etc.Colour matching using spectrophotometer & color matching cabinets.",
  },
  {
    ques: "FASTER DELIVERY",
    ans: "Our wide distribution network spread across india and also our proximity to transport centres is within few kms,ensures to deliver consignment at faster speed.",
  },
  {
    ques: "ISO CERTIFIED",
    ans: "Iso 9001:2015 and iso 14001:2015 certified company.",
  },
  {
    ques: "CONSISTENT QUALITY",
    ans: "Team of highly qualified chemists constantly review the quality of paints and resins manufactured,along with the raw materials to meet quality assurance.",
  },
  {
    ques: "MODERNISE LABORATORY",
    ans: "Testing and R&D using equipments like viscosity meters, dft meters, ovens, glossometer, impact tester, boiling and melting point apparatus,moisture meter etc.",
  },
  {
    ques: "ENVIRONMENT FRIENDLY",
    ans: 'Initiative to "Go green" using measures like effluent treatment plant,gardening and tree plantations etc.',
  },
];

const Collapsible = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = ({ question, answere }) => {
    setIsCollapsed(!isCollapsed);
  };

  return collapse.map((items, index) => (
    <>
    <div className="mb-4 mt-5 w-full" key={index}>
      <button
        onClick={toggleCollapse}
        className="bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none w-full"
      >
        {items.ques}
      </button>
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            {/* Content inside the collapsible section */}
            <p className="p-4 bg-gray-200">{items.ans}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  ));
};

export default Collapsible;
