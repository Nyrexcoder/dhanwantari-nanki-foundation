"use client";
import Link from "next/link";
import { GrMenu } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import MobileNav from './MobileNav';
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

const Navbar = () => {
  const [isScrolling, setScrolling] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  function toggleMenu(isOpen) {
    setIsMobileNav(isOpen);
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
     
      {
        <AnimatePresence>
          isScrolling ? (
          <NavbarScroll isScrolling={isScrolling} toggleMenu={toggleMenu} isMobileNav={isMobileNav}  />
          ):
          <NavbarFixed toggleMenu={toggleMenu} isMobileNav={isMobileNav} />
        </AnimatePresence>
      }
    </>
  );
};

const NavbarScroll = ({ isScrolling, toggleMenu, isMobileNav }) => {
  return (
      isScrolling && <motion.div
      inherit="initial"
      animate="animate"
      exit="exit"
      variants={NavAnimation}
      className="md:flex md:justify-between md:items-center fixed z-50 top-0 bg-white text-green-800 w-full shadow-lg"
    >
      <div className="ml-8 flex justify-between items-center">
      <Link href={'/'}><img src="https://t4.ftcdn.net/jpg/03/11/53/77/360_F_311537787_V5pD8sE52ZSTb5Kj3BOKevntFUaZv4AG.jpg" className="rounded-full" width={50} alt="logo" /></Link>
        <div className="p-3 mt-4 text-[#dc3545] md:block hidden">
          <h1 className="font-bold text-xl">DHANVANTRI NANKI</h1>
          <p className="text-sm text-yellow-500 absolute left-[15%]">FOUNDATION</p>
        </div>
        <div className="p-2 md:hidden block">
        <h1 className="font-bold text-xl text-[#dc3545] text-center">SAVITA PAINT</h1>
        </div>
        <div className="text-4xl">
          <GrMenu onClick={() => toggleMenu(true)} className="md:hidden block mr-5" />
        </div>
      </div>
      {isMobileNav && <MobileNav isOpen={isMobileNav} onClose={toggleMenu} />}
      <nav className="mr-3 md:block hidden">
        <ul className="flex">
          {nav.map((navItem, index) => (
            <>
              <Link href={navItem.link} key={index} className="mr-2 font-bold">
                <li className="flex m-3 p-2 rounded-2xl text-sm">
                  {navItem.label}
                </li>
              </Link>
            </>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};


const NavbarFixed = ({toggleMenu, isMobileNav}) => {
  return (
    <div className="md:flex md:justify-between md:items-center bg-transparent md:fixed md:w-full md:top-0 z-50">
      <div className="ml-8 flex justify-between items-center">
      <Link href={'/'}> <img src="https://t4.ftcdn.net/jpg/03/11/53/77/360_F_311537787_V5pD8sE52ZSTb5Kj3BOKevntFUaZv4AG.jpg" className="rounded-full" width={50} alt="logo" /></Link>
        <div className="p-3 mt-4 text-[#237920] md:block hidden">
        <h1 className="font-bold text-xl">DHANVANTRI NANKI</h1>
          <p className="text-sm absolute left-[15%]">FOUNDATION</p>
        </div>
        <div className="p-2 md:hidden block">
        <h1 className="font-bold text-xl text-[#dc3545] text-center">SAVITA PAINT</h1>
        </div>
        <div className="text-4xl">
        <GrMenu onClick={() => toggleMenu(true)} className="md:hidden block mr-5" />
        </div>
      </div>
      {isMobileNav && <MobileNav isOpen={isMobileNav} onClose={toggleMenu} />}
      <nav className="mr-3 md:block hidden">
        <ul className="flex">
          {nav.map((navItem, index) => (
            <>
              <Link href={navItem.link} key={index} className="mr-2 text-sm font-bold">
                <li className="flex m-3 p-2 rounded-2xl">
                  {navItem.label}
                </li>
              </Link>
            </>
          ))}
        </ul>
      </nav>
      
    </div>
  );
};


const NavAnimation = {
  initial: {
    y: -100,
    backgroundColor: "transparent",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      duration: 0.8,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};

export default Navbar;
