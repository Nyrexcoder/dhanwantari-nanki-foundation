import React from "react";
import Donation from "./Donation";
const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:h-[90vh]">
            <div className="w-full md:w-[70%]">
                    <img className="mx-auto" src="natualpathy-removebg-preview.png" />
                    <h1 className="text-green-700 font-bold text-4xl text-center" style={{'font-family': 'Dosis,sans-serif'}}>Ayurvedic Cum Naturopathy Centre</h1>
            </div>
            <div className="w-full md:w-[30%]">
                <Donation/>
            </div>
      </div>
    </>
  );
};

export default Hero;
