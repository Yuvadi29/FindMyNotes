import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  return (
    <div>
      <header className="border-2 py-2 px-4 flex justify-between items-center">
        <div className="w-28 border border-red-500 h-[45px]  relative flex overflow-hidden justify-center items-centers">
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
        <div
          className="border flex justify-center items-center"
          onClick={() => {
            setIsNavbarActive(!isNavbarActive);
            console.log(isNavbarActive);
          }}
        >
          <div className="hidden sm:block">
            <a href="" className="mr-4">
              Home
            </a>
            <a href="" className="mr-4">
              About
            </a>
            <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl font-bold mr-4">
              Login
            </button>
            <button className="bg-blue-500 px-5 py-2 rounded-xl font-bold ">
              Signup
            </button>
          </div>
          <RxHamburgerMenu className="text-xl sm:hidden" />
        </div>
      </header>
    </div>
  );
};

export default Header;
