import React from "react";

const DonationBanner = () => {
  return (
    <div className="flex md:flex-row flex-col p-3 w-full md:h-[400px] h-full bg-[url(https://res.cloudinary.com/dsxzeobeu/images/f_auto,q_auto/v1657801442/donation-bg/donation-bg.jpg?_i=AA&id=4164)] mt-3 mb-3">
      <div className="md:mx-auto">
        <img
          className="pt-5 mx-auto"
          src="https://res.cloudinary.com/dsxzeobeu/image/upload/c_scale,w_344,h_344/f_auto,q_auto/v1657801379/underprivileged-girl.png?_i=AA"
        />
      </div>
      <div className="text-white md:w-1/2 md:mx-auto">
        <h1 className="mt-5 text-center font-[Dosis,sans-serif] text-4xl">
          Doesn`t every child of the nation deserve quality education?
          <br />
          <br />
          Aren`t poor children supposed to access quality schooling?
        </h1>
        <div className="flex text-center md:w-1/2 md:mx-auto p-5 mt-3 ml-12 md:ml-22 md:mt-3">
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-2">
            Donate
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Join Us
          </button>
        </div>

        <p></p>
      </div>
    </div>
  );
};

export default DonationBanner;
