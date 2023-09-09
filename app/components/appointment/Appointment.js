'use client';
import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { RiPsychotherapyFill } from "react-icons/ri";
import { AiFillCalendar } from "react-icons/ai";
const Appointment = () => {
  return (
    <div className="container mx-auto p-3 md:mt-24">
      <h1 className="text-center font-bold text-4xl text-green-900 p-3">
       Doctor Appointment
      </h1>
      {/* <p className="text-center text-sm text-purple-900 p-3">
        If you are looking for the best paint online, look no further. Savita
        Painting is a service all-rounder in home painting, waterproofing and
        wood coating solutions. Enjoy a hassle-free paint job today!
      </p> */}
      <div className="flex md:flex-row flex-col w-full md:w-[80%] mx-auto">
        <div className="border p-10 w-full md:w-[60%]">
            <img src="https://t3.ftcdn.net/jpg/02/86/03/58/360_F_286035818_uyTiUqvQWtQjT4LT5Wwm8CDo4rVnxuli.jpg" width={'100%'} />
        </div>
        <div className="bg-green-200 p-10 w-full md:w-[40%]">
          <h1 className="font-bold text-green-900 text-xl">Get In Touch</h1>
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
              <RiPsychotherapyFill className="text-xl absolute ml-2 pointer-events-none text-gray-700" />
                <select className="w-full pr-3 pl-10 focus-within:border-b-gray-900 bg-transparent border-b border-black outline-none p-3 text-gray-700 text-sm">
                    <option value=''>Select Therapy</option>
                    <option value='naturopathy'>Naturopathy</option>
                    <option value='ayurveda'>Ayurveda</option>
                    <option value='yoga'>Yoga</option>
                    <option value='accupressure'>Accupressure</option>
                </select>
            </div>
            <div className="relative flex items-center m-4">
              <AiFillCalendar className="text-xl absolute ml-2 pointer-events-none text-gray-700" />
              <input
                type="date"
                className="w-full pr-3 pl-10 focus-within:border-b-gray-900 bg-transparent border-b border-black outline-none p-3 text-gray-700 text-sm"              />
            </div>
            <button className="m-4 bg-green-900 p-2 w-32 h-10 text-white text-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
