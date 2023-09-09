'use client';
import React from "react";
import NumberCounter from 'number-counter';
const Counter = () => {
  return (
    <section className="w-full bg-orange-500 shadow-lg">
      <div className="mt-10 md:p-10 p-3  md:w-[80%] w-100% mx-auto h-[20%] bg-orange-500 flex justify-between">
        <div className="">
          <h1 className="md:text-6xl text-xl text-white text-center"><NumberCounter end={12} delay={5} className="increment" postFix="+"/></h1>
          <p className="text-white text-center">Centre</p>
        </div>
        <div className="">
          <h1 className="md:text-6xl text-xl text-white text-center"><NumberCounter end={20} delay={5} className="increment" postFix="+"/></h1>
          <p className="text-white text-center">Doctors</p>
        </div>
        <div className="">
          <h1 className="md:text-6xl text-xl text-white text-center"><NumberCounter end={920} delay={2} className="increment" postFix="+"/></h1>
          <p className="text-white text-center">Members</p>
        </div>
      </div>
    </section>
  );
};

export default Counter;
