import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { AiFillBulb } from "react-icons/ai";

const Header = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  return (
    <div>
      <header className="relative border-b-2 py-2 px-4 flex justify-between items-center">
        <div className="w-28 h-[45px]  relative flex overflow-hidden justify-center items-centers">
          <img
            src="https://findmynotes.pythonanywhere.com/static/media/images/logo.png"
            alt="logo"
            className="absolute w-full inset-0 m-auto"
          />
        </div>
        {/* <div className="">
          <a href="" className="">
            Home
          </a>
          <a href="" className="">
            About
          </a>
          <button className="">Login</button>
          <button className="">Signup</button>
        </div> */}
        <div className="border flex justify-center items-center">
          <div className="hidden sm:block">
            <a href="" className="mr-4 font-semibold">
              Home
            </a>
            <a href="" className="mr-4 font-semibold">
              About
            </a>
            <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl font-bold mr-4">
              Login
            </button>
            <button className="bg-blue-500 px-5 py-2 rounded-xl font-bold ">
              Signup
            </button>
          </div>
          <div
            onClick={() => {
              setIsNavbarActive(!isNavbarActive);
              console.log(isNavbarActive);
            }}
          >
            <RxHamburgerMenu className="text-xl sm:hidden" />
          </div>
        </div>
        {isNavbarActive ? (
          <div className="absolute bg-[#f6f8fc] py-3 right-0 left-0 top-full">
            <div className="flex h-full justify-around scale-90 items-center uppercase font-bold">
              <a href="" className="flex justify-center items-center">
                <FaHome className="mr-2" />
                <span>Home</span>
              </a>
              <a href="" className="flex justify-center items-center">
                <AiFillBulb className="mr-2" />
                <span>About</span>
              </a>
              <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl font-bold">
                Login
              </button>
              <button className="bg-blue-500 px-5 py-2 rounded-xl font-bold ">
                Signup
              </button>
            </div>
          </div>
        ) : null}
      </header>
    </div>
  );
};

export default Header;
