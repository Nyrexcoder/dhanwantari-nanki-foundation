'use client';
import Hero from "./components/Home/Hero";
import Banner from "./components/Home/Banner/Banner";
import DonationBanner from "./components/Home/Banner/DonationBanner";
import HomeSlider from "./components/Home/Slider/HomeSlider";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner/>
      <HomeSlider/>
      <DonationBanner />
    </>
  );
}
