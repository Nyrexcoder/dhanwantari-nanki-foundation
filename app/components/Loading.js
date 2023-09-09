"use client";
import React from "react";
import { ColorRing } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="w-full relative md:top-[350px] top-[300px] md:left-[40%] left-[25%] mx-auto">
      {/* <InfinitySpin width="200" color="#4fa94d" /> */}
      <ColorRing
        visible={true}
        width="200"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};

export default Loading;
