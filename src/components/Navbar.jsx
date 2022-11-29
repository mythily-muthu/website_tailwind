import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdHelp, MdFavorite } from "react-icons/md";

const Navbar = () => {
  let [nav, setNav] = useState(false);

  return (
    // navbar
    <div className="max-w-[1640px] m-auto flex justify-between items-center p-4 ">
      <div className="flex items-center ">
        {/* menu */}
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        {/* best eats */}
        <h1 className="text-2xl bg-white sm:bg-black md:bg-red lg:bg-blue-500 2xl:bg-orange-600 sm:text-3xl lg:text-4xl px-3">
          Best <span className="font-bold">Eats</span>
        </h1>
        {/* pick up */}
        <div className="hidden lg:flex gap-1 items-center bg-orange-300 rounded-full pss-1">
          <p className="bg-black text-white rounded-full p-1">Delivery</p>
          <p>Pick up</p>
        </div>
      </div>
      {/* search tab */}
      <div className=" bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent w-full"
          type="text"
          placeholder="Search food"
        />
      </div>
      {/* cart button */}
      <button className="bg-black text-white rounded-full  md:flex gap-1 items-center">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* mobile view overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10  top-0 left-0 "></div>
      ) : (
        ""
      )}

      {/* side drawer */}
      <div
        className={
          nav
            ? "bg-white fixed w-[300px] h-screen z-10 top-0 left-0 duration-300"
            : "bg-white fixed w-[300px] h-screen z-10 top-0 left-[-100%] duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => {
            setNav(!nav);
          }}
          size={20}
          className="absolute right-4 top-4 cursor-pointer"
        />

        <h2 className="text-2xl p-4 top-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-3">
            <li className="text-xl py-3 flex">
              <TbTruckDelivery size={25} className="ml-4 " />
              Orders
            </li>

            <li className="text-xl py-3 flex">
              <MdFavorite size={25} className="ml-4" />
              Favourites
            </li>
            <li className="text-xl py-3 flex">
              <FaWallet size={25} className="ml-4" />
              wallet
            </li>
            <li className="text-xl py-3 flex">
              <MdHelp size={25} className="ml-4" />
              Help
            </li>
            <li className="text-xl py-3 flex">
              <AiFillTag size={25} className="ml-4" />
              Promotions
            </li>
            <li className="text-xl py-3 flex">
              <BsFillSaveFill size={25} className="ml-4" />
              Best ones
            </li>
            <li className="text-xl py-3 flex">
              <FaUserFriends size={25} className="ml-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
