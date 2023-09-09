"use client";
import React from "react";
import HoverAnimation from "./HoverAnimation";
const HomeTab = () => {
  return (
    <div class="container mx-auto">
      <div class="grid grid-cols-5 pl-2 pr-2 md:grid-cols-3 lg:grid-cols-5 gap-0 md:gap-5">
        <HoverAnimation>
          <div class="bg-purple-200 p-4 flex items-center">
              <img src="sb-2.jpg" className="md:w-[30%] rounded-full" />
            <span className="text-purple-600 ml-2 items-center md:block hidden">
              Naturopathy
            </span>
          </div>
        </HoverAnimation>
        <HoverAnimation>
          <div class="bg-green-200 p-4 flex items-center">
            <img src="sb-1.jpg" className="md:w-[30%] rounded-full" />
            <span className="text-green-600 ml-2 items-center md:block hidden">
              Ayurveda
            </span>
          </div>
        </HoverAnimation>
        <HoverAnimation>
          <div class="bg-pink-200 p-4 flex items-center">
            {" "}
            <img src="https://t4.ftcdn.net/jpg/04/71/17/07/360_F_471170737_BgoxMWZLTygfFLo3ejGMXZZlHZ6gDKbG.jpg" className="md:w-[30%] rounded-full" />
            <span className="text-pink-600 ml-2 items-center md:block hidden">
              Yoga
            </span>
          </div>
        </HoverAnimation>
        <HoverAnimation>
          <div class="bg-blue-200 p-4 flex items-center">
            {" "}
            <img src="https://w7.pngwing.com/pngs/222/993/png-transparent-bitcoin-cash-ethereum-cryptocurrency-logo-meditation-physical-fitness-orange-investment.png" className="md:w-[30%] rounded-full" />
            <span className="text-blue-600 ml-2 items-center md:block hidden">
              Meditation
            </span>
          </div>
        </HoverAnimation>
        <HoverAnimation>
          <div class="bg-green-200 p-4 flex items-center">
            {" "}
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/feet-acupressure-3757525-3133088.png" className="md:w-[30%] rounded-full" />
            <span className="text-green-600 ml-2 items-center md:block hidden">
              Accupressure
            </span>
          </div>
        </HoverAnimation>
      </div>
    </div>
  );
};

export default HomeTab;
