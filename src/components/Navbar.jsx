import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="max-w-[1640px] m-auto flex justify-between items-center p-4 ">
      <div className="flex items-center ">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>

        <h1 className="text-2xl sm:text-3xl lg:4xl px-3">
          Best <span className="font-bold">Eats</span>
        </h1>

        <div className="hidden lg:flex gap-1 items-center bg-orange-300 rounded-full pss-1">
          <p className="bg-black text-white rounded-full p-1">Delivery</p>
          <p>Pick up</p>
        </div>
      </div>

      <div className=" bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent w-full"
          type="text"
          placeholder="Search food"
        />
      </div>

      <button className="bg-black text-white rounded-full  md:flex gap-1 items-center">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>
    </div>
  );
};

export default Navbar;
