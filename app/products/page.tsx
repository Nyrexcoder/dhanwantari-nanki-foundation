import React from "react";
import Products from "../components/product/products";
import Footer from "../components/Footer";
const page = () => {
  return (
    <>
      <section className="mt-10 mb-5">
        <Products />
      </section>
      <Footer />
    </>
  );
};

export default page;
