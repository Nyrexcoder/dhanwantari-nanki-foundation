import React from "react";
import Tabs from "./Tabs";

const ResinDivision = () => {
  return (
    <div className="h-[120vh] md:h-[100vh] relative">
      <div
        className="bg-gradient-to-r md:clip-trapezoid from-purple-500 via-red-500 to-yellow-500 md:h-screen h-[120vh]"
      
      ></div>
      <div className="container  mx-auto absolute top-[10%]">
        <h1 className="text-center md:text-6xl text-4xl text-white">RESIN DIVISION</h1>
        <p className="p-10 md:text-xl text-md text-white text-center">
          Natural Marble is a wonder created by nature. We only enhance and
          highlight it. Presenting Savita Paint Resin for use on natural marble.
          For applications which require extremely high glossy surface finish,
          high resistance to weathering and durability, Asterix Epoxy Marble
          Resin is the solution. These resins are specifically formulated based
          on customer application requirement and request you to contact us with
          your specific requirement.
        </p>
        <Tabs/>
      </div>
    </div>
  );
};

export default ResinDivision;
