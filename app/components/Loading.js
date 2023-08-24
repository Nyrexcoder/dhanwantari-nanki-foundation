'use client';
import React from "react";
import { InfinitySpin } from "react-loader-spinner";
const Loading = () => {
  return (
    <>
    <div className='w-[150px] mx-auto'>
      <InfinitySpin width="200" color="#4fa94d" />
        </div>
    </>
  );
};
export default Loading;
