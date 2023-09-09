import React from "react";
import Footer from "../components/Footer";
const page = () => {
  return (
    <>
    <section className="mt-20 p-10">
      <h1 className="text-orange-500 font-bold text-sm ">SAVITA PAINTS</h1>
      <h2 className="text-purple-900 text-4xl ">
        WE PROTECT AND DECORATE YOUR DREAMS
      </h2>
      <p className="mt-5">
        Employee policies and practices are administered in a manner that
        ensures all decisions relating to promotion, compensation and any other
        form of reward and recognition are based entirely on merit. We encourage
        a high-performance culture and support it through various rewards and
        recognition. We strive to ensure a safe, healthy, clean and ergonomic
        working environment for our employees. We aspire to be the health and
        safety benchmark for the global paint manufacturing industry.
      </p>

      <p className="mt-5">
      At SAVITA PAINTS, we provide equal employment opportunity to all applicants, without regard to religion, caste, color, gender and disability. The recruitment is being carried out in a transparent manner, paving no room for malpractices / unprofessional conduct. We put in appreciable efforts in recruiting the best qualified people, keeping in view the goals and objectives of the organization. We also encourage maximum recruitment at entry level by participating in Campus Recruitment drives at finest colleges across India.
      </p>
    </section>
    <Footer />
    </>
  );
};

export default page;
