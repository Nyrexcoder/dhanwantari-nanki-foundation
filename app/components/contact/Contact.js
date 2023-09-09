'use client';
import React from "react";
import { BiSolidUser, BiSolidMessageAltDetail } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
const Contact = () => {
  return (
    <div className="container mx-auto p-3">
      <h1 className="text-center font-bold text-4xl text-purple-900 p-3">
        Contact Us
      </h1>
      <p className="text-center text-sm text-purple-900 p-3">
        If you are looking for the best paint online, look no further. Savita
        Painting is a service all-rounder in home painting, waterproofing and
        wood coating solutions. Enjoy a hassle-free paint job today!
      </p>
      <div className="h-96 m-5 w-full mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13978.446804756206!2d76.97524524307434!3d28.850418353272335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da640592d3783%3A0xf06eab8db1d55e64!2sJataula%2C%20Haryana!5e0!3m2!1sen!2sin!4v1694171215147!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
      <div className="flex md:flex-row flex-col w-full md:w-[80%] mx-auto">
        <div className="border p-10 w-full md:w-[60%]">
          <h1 className="font-bold text-purple-900 text-xl">
            Get your home painted in a smart way with
          </h1>
          <h2 className="text-red-500 text-4xl mt-3 mb-5">DHANVANTRI NANKI FOUNDATION</h2>
          <div>
            <h1 className="font-bold text-xl">Registered Office</h1>
            <p>
            C-1/8 Ground Floor, Ashok VIhar Phase-II, Delhi
            </p>
          </div>
          <div className="mt-2">
            <p>
            (+91) 931969044, 9319699066, 9319699077
            </p>
            <p>
            dhanvantrinanki9044@gmail.com
            </p>
          </div>
        </div>
        <div className="bg-gray-200 p-10 w-full md:w-[40%]">
          <h1 className="font-bold text-purple-900 text-xl">Get In Touch</h1>
          <form>
            <div className="relative flex items-center m-4">
              <BiSolidUser className="text-xl absolute ml-2 pointer-events-none text-gray-700" />
              <input
                type="text"
                className="w-full pr-3 pl-10 focus-within:border-b-gray-900 bg-transparent border-b border-black outline-none p-3 text-gray-700 text-sm"
                placeholder="Your Name"
              />
            </div>
            <div className="relative flex items-center m-4">
              <FaMobileAlt className="text-xl absolute ml-2 pointer-events-none text-gray-700" />
              <input
                type="number"
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full pr-3 pl-10 focus-within:border-b-gray-900 bg-transparent border-b border-black outline-none p-3 text-gray-700 text-sm"
                placeholder="Mobile Number"
              />
            </div>
            <div className="relative flex items-center m-4">
              <MdEmail className="text-xl absolute ml-2 pointer-events-none text-gray-700" />
              <input
                type="email"
                className="w-full pr-3 pl-10 focus-within:border-b-gray-900 bg-transparent border-b border-black outline-none p-3 text-gray-700 text-sm"
                placeholder="Your Email"
              />
            </div>
            <div className="relative flex items-center m-4">
              <ImLocation className="text-xl absolute ml-2 pointer-events-none text-gray-700" />
              <input
                type="text"
                className="w-full pr-3 pl-10 focus-within:border-b-gray-900 bg-transparent border-b border-black outline-none p-3 text-gray-700 text-sm"
                placeholder="Your City"
              />
            </div>
            <div className="relative flex items-center m-4">
              <BiSolidMessageAltDetail className="text-xl absolute ml-2 mb-5 pointer-events-none text-gray-700" />
              <textarea
                className="w-full pr-3 pl-10 focus-within:border-b-gray-900 bg-transparent border-b border-black outline-none p-3 text-gray-700 text-sm"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="m-4 bg-purple-900 p-2 w-32 h-10 text-white text-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
