import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640] mx-auto p-4">
      <div className="max-h-[500px] relative ">
        <div className="absolute w-full h-full max-h-[500px] flex flex-col justify-center px-4 text-4xl">
          <h1 className="font-bold text-gray-200 sm:text-5xl md:text-6xl lg:text-7xl ">
            The <span className="text-orange-400">Best</span>
          </h1>
          <h1 className="font-bold  text-gray-200 sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-orange-400">Foods</span> Delivered
          </h1>
        </div>

        <img
          className="max-h-[500px] w-full object-cover"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="food"
        />
      </div>
    </div>
  );
};

export default Hero;
