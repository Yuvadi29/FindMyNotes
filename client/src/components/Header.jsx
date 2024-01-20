import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { AiFillBulb } from "react-icons/ai";

const Header = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false); // Add state for user sign-in status

  return (
    <div>
      <header className="relative flex items-center justify-between border-b-2 px-4 py-2">
        <div className="items-centers relative  flex h-[45px] w-28 justify-center overflow-hidden">
          <img
            src="https://findmynotes.pythonanywhere.com/static/media/images/logo.png"
            alt="logo"
            className="absolute inset-0 m-auto w-full"
          />
        </div>
        <div className="flex items-center justify-center border">
          <div className="hidden sm:block">
            <a href="" className="mr-4 font-semibold">
              Home
            </a>
            <a href="" className="mr-4 font-semibold">
              About
            </a>
            {isUserSignedIn ? ( // Conditionally render based on user sign-in status
              <button className="mr-4 rounded-xl bg-blue-500 px-5 py-2 font-bold hover:bg-blue-600">
                Profile
              </button>
            ) : (
              <>
                <a href="/login">
                  <button className="mr-4 rounded-xl bg-blue-500 px-5 py-2 font-bold hover:bg-blue-600">
                    Login
                  </button>
                </a>
                <a href="/signup">
                  <button className="rounded-xl bg-blue-500 px-5 py-2 font-bold ">
                    Signup
                  </button>
                </a>
              </>
            )}
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
          <div className="absolute left-0 right-0 top-full bg-[#f6f8fc] py-3">
            <div className="flex h-full scale-90 items-center justify-around font-bold uppercase">
              <a href="" className="flex items-center justify-center">
                <FaHome className="mr-2" />
                <span>Home</span>
              </a>
              <a href="" className="flex items-center justify-center">
                <AiFillBulb className="mr-2" />
                <span>About</span>
              </a>
              {isUserSignedIn ? ( // Conditionally render based on user sign-in status
                <button className="rounded-xl bg-blue-500 px-5 py-2 font-bold hover:bg-blue-600">
                  Profile
                </button>
              ) : (
                <>
                  <a href="/login">
                    <button className="rounded-xl bg-blue-500 px-5 py-2 font-bold hover:bg-blue-600">
                      Login
                    </button>
                  </a>

                  <a href="/signup">
                    <button className="rounded-xl bg-blue-500 px-5 py-2 font-bold ">
                      Signup
                    </button>
                  </a>
                </>
              )}
            </div>
          </div>
        ) : null}
      </header>
    </div>
  );
};

export default Header;
