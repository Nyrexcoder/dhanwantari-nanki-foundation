import Link from "next/link";
import React from "react";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";
const nav = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About", 
    link: "/about",
  },
  {
    label: "Appointment",
    link: "/appointment",
  },
  {
    label: "Donate",
    link: "/donate",
  },
  {
    label: "Contact",
    link: "/contact",
  },
  {
    label: "Login",
    link: "/login",
  },
];
const MobileNav = ({ isOpen, onClose }) => {
  const sidebarVariants = {
    open: {
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.5,
      },
    },
    closed: {
      y: "-100%",
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  const overlayVariants = {
    open: { opacity: 1, pointerEvents: "auto" },
    closed: { opacity: 0, pointerEvents: "none" },
  };

  return (
    isOpen && (
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={overlayVariants}
        onClick={() => onClose(false)}
        className="fixed inset-0 flex z-50 bg-black bg-opacity-60"
      >
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={sidebarVariants}
          className="bg-purple-700 w-full lg:w-1/3 p-4 shadow-lg"
        >
          <div className="flex justify-between">
            <h1 className="font-bold text-xl text-white">Menu</h1>
            <GrClose
              onClick={() => onClose(false)}
              className="text-xl cursor-pointer hover:text-white"
            />
          </div>
          <ul className="mt-4">
            {nav.map((navItem) => (
              <li key={navItem.link} className="mb-4 text-lg font-bold text-white border-dotted border-b border-white">
                <Link onClick={() => onClose(false)} href={navItem.link}>
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    )
  );
};

export default MobileNav;
