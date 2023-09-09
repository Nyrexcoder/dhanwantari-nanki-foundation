"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay,Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
const HeroSlider = () => {
  return (
    <>
      <Swiper
        className="mySwiper relative group"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[Autoplay,Navigation]}
      >
        <SwiperSlide>
          <img src="slider1.jpg" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider2.jpg" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider3.jpg" width={"100%"} />
        </SwiperSlide>

        <div className="top-[50%] absolute z-10 button-prev-slide group-hover:right-0 -right-[23rem] duration-500 text-white w-[40px] h-[40px] bg-[#000] grid place-items-center">
          <HiOutlineArrowNarrowRight />
        </div>
        
        <div className="top-[50%] absolute z-10 button-next-slide group-hover:left-0 -left-[23rem] duration-500 text-white w-[40px] h-[40px] bg-[#000] grid place-items-center">
          <HiOutlineArrowNarrowLeft />
        </div>
       
      </Swiper>
    </>
  );
};

export default HeroSlider;
