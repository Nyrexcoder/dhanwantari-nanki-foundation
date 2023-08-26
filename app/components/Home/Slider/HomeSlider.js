import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay,Pagination } from "swiper/modules";

const HomeSlider = () => {
  const titles = [
    "Naturopathy","Naturopathy","Ayurveda"
  ]
  return (
    <div className="p-5 m-5">
     <Swiper
          breakpoints={{
            // When window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // When window width is >= 1024px
            1024: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
       
          <SwiperSlide>
            <div className="bg-white h-72 p-6 rounded-lg shadow-md bg-[url(https://img.freepik.com/free-photo/herbal-compress-herbal-spa-treatment-equipments-put-dark-floor_1150-34493.jpg?size=626&ext=jpg)] bg-cover">
              <h2 className="text-4xl text-white text-center md:absolute md:top-36 font-semibold mb-4">{titles[0]}</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="bg-white h-72 p-6 rounded-lg shadow-md bg-[url(https://img.freepik.com/premium-photo/bottles-homeopathic-drugs-mortars-mineral-substances-medicinal-plants-infusion-bottles_629370-227.jpg?w=740)] bg-cover">
          <h2 className="text-4xl text-white text-center md:absolute md:top-36 font-semibold mb-4">{titles[1]}</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="bg-white h-72 p-6 rounded-lg shadow-md bg-[url(https://img.freepik.com/free-photo/top-view-spa-arrangement-green-background_23-2148290901.jpg?w=900&t=st=1693037101~exp=1693037701~hmac=3f5aadeee000f3d03311d2cce7f6404724eaf6ff0bdbf78f6f983033d4639491)] bg-cover">
          <h2 className="text-4xl text-white text-center md:absolute md:top-36 font-semibold mb-4">{titles[2]}</h2>
            </div>
          </SwiperSlide>
       
      </div>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
