import React from "react";
import Footer from '../components/Footer';
import Contact from '../components/contact/Contact';

const page = () => {
  return (
    <section className="md:mt-20 mt-18 z-[-1]">
    <Contact />
    <Footer/>
    </section>
  );
};

export default page;
