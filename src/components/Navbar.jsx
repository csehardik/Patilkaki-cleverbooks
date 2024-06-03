import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";

const Navbar = () => {
  return (
    <div className=" flex justify-between px-16 py-4 items-center font-proxima">
      <div className="">
        <span className=" text-white md:text-2xl lg:text-4xl">CleverBooks</span>
      </div>
      <div className="sm:hidden md:flex space-x-4 ">
        <Link
          to=""
          className="cursor-pointer"
          style={{ textDecoration: "none" }}
        >
          <span className="text-white sm:text-xs lg:text-sm">Product</span>
        </Link>
        <Link
          to=""
          className="cursor-pointer"
          style={{ textDecoration: "none" }}
        >
          <span className="text-white sm:text-xs lg:text-sm">Pricing</span>
        </Link>
        <Link
          to=""
          className="cursor-pointer"
          style={{ textDecoration: "none" }}
        >
          <span className="text-white sm:text-xs lg:text-sm">Industry</span>
        </Link>
        <Link
          to=""
          className="cursor-pointer"
          style={{ textDecoration: "none" }}
        >
          <span className="text-white sm:text-xs lg:text-sm">
            Customer Stories
          </span>
        </Link>
        <Link
          to=""
          className="cursor-pointer"
          style={{ textDecoration: "none" }}
        >
          <span className="text-white sm:text-xs lg:text-sm">About</span>
        </Link>
        <Link
          to=""
          className="cursor-pointer"
          style={{ textDecoration: "none" }}
        >
          <span className="text-white sm:text-xs lg:text-sm">Blog</span>
        </Link>
      </div>
      <div className="md:hidden">
        <MenuIcon className="text-white " />
      </div>
      <div className="sm:hidden md:flex space-x-4">
        <button className="text-pink-200 sm:text-xs lg:text-sm">Login</button>
        <button className="bg-pink-btn text-white p-2 rounded-full sm:text-xs lg:text-sm">
          Talk to Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
