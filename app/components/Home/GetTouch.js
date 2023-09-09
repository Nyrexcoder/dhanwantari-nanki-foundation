import React from "react";
const GetTouch = () => {
  return (
    <div className="container mx-auto p-3 mt-10">
      <h1 className="text-center font-bold text-4xl text-green-900 p-3">
        HEALTHY BODY HAVE HEALTHY MIND
      </h1>
      {/* <p className="text-center text-sm text-green-900 p-3">
        If you are looking for the best paint online, look no further. Berger
        Express Painting is a service all-rounder in home painting,
        waterproofing and wood coating solutions. Enjoy a hassle-free paint job
        today!
      </p> */}
      <div className="flex md:flex-row flex-col w-full">
        <div className="border w-full md:w-[100%]">          
        <img src="banner1.jpg" alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default GetTouch;
