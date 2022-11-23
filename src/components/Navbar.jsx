import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="max-w-[1640px] m-auto flex justify-between items-center p-4 ">
      <div className="flex items-center ">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>

        <h1 className="text-2xl sm:text-3xl">
          Best <span>Eats</span>
        </h1>

        <div>
          <p>Delivery</p>
          <p>Pick up</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
