"use client";
import React, { useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Donation from "./Donation";
import { motion, useInView, useAnimation } from "framer-motion";

const Hero = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      vertical: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
      >
        <div
          className="relative h-[700px] top-0 left-0 bg-[linear-gradient(90deg,#eafff4,#fcfee2)] z-[-1]"
          style={{
            "clip-path": "ellipse(99% 100% at 2.47% 0)",
            "-webkit-clip-path": "ellipse(99% 100% at 2.47% 0)",
          }}
        >
          {" "}
        </div>
        <div className="absolute top-28 flex flex-col md:flex-row md:h-[90vh]">
          <div className="w-full md:w-[70%] pointer-events-none md:pointer-events-auto">
            <div
              ref={sliderRef}
              className="keen-slider"
              style={{ height: 500 }}
            >
              <div className="keen-slider__slide">
                <img className="mx-auto" src="natualpathy.png" />
                <h1
                  className="text-green-700 font-bold text-4xl text-center"
                  style={{ "font-family": "Dosis,sans-serif" }}
                >
                  Ayurvedic Cum Naturopathy Centre
                </h1>
              </div>

              <div className="keen-slider__slide">
                <img className="mx-auto" src="pic-2.png" />
                <h1
                  className="text-green-700 font-bold text-4xl text-center"
                  style={{ "font-family": "Dosis,sans-serif" }}
                >
                  Education
                </h1>
              </div>

              <div className="keen-slider__slide">
                <img className="mx-auto" src="natualpathy-2.png" />
                <h1
                  className="text-green-700 font-bold text-4xl text-center mb-28"
                  style={{ "font-family": "Dosis,sans-serif" }}
                >
                  Ayurveda
                </h1>
              </div>


              <div className="keen-slider__slide">
                <img className="mx-auto" src="ayurveda-1.png" />
                <h1
                  className="text-green-700 font-bold text-4xl text-center"
                  style={{ "font-family": "Dosis,sans-serif" }}
                >
                  Ayurveda
                </h1>
              </div>

            </div>
          </div>
          <div className=" w-full md:w-[30%]">
            <Donation />
          </div>
        </div>
        <div className="relative top-[-135px]">
        <img src="demo.png" />
    </div>
      </motion.div>
      
    </>

  );
};

export default Hero;
