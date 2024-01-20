import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { AiFillBulb } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeUserData, setUserData } from "../Redux/slices/user-slice";
import { Link, useNavigate } from "react-router-dom";
import { TbUpload } from "react-icons/tb";


const Header = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  console.log(isAuthenticated);

  const user = useSelector((state) => state.user.userData);
  console.log(user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeUserData());
    navigate('/');
  };

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
            <Link to="/" className="mr-4 font-semibold">
              Home
            </Link>
            <Link to="/about" className="mr-4 font-semibold">
              About
            </Link>
            {isAuthenticated ? ( // Conditionally render based on user sign-in status
              <>
                <Link to="/upload">
                  <TbUpload fontSize={20} />
                </Link>
                <Link to="/profile">
                  <button className="mr-4 rounded-xl bg-blue-500 px-5 py-2 font-bold hover:bg-blue-600">
                    Profile
                  </button>
                  {user.userName}
                </Link>
                <button className="mr-4 rounded-xl bg-blue-500 px-5 py-2 font-bold hover:bg-blue-600" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="mr-4 rounded-xl bg-blue-500 px-5 py-2 font-bold hover:bg-blue-600">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="rounded-xl bg-blue-500 px-5 py-2 font-bold ">
                    Signup
                  </button>
                </Link>
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
        {isAuthenticated ? (
          <div className="absolute left-0 right-0 top-full bg-[#f6f8fc] py-3">
            <div className="flex h-full scale-90 items-center justify-around font-bold uppercase">
              <Link to="" className="flex items-center justify-center">
                <FaHome className="mr-2" />
                <span>Home</span>
              </Link>
              <Link to="" className="flex items-center justify-center">
                <AiFillBulb className="mr-2" />
                <span>About</span>
              </Link>
              {isAuthenticated ? ( // Conditionally render based on user sign-in status
                <button className="rounded-xl bg-blue-500 px-5 py-2 font-bold hover:bg-blue-600">
                  Profile
                </button>
              ) : (
                <>
                  <Link to="/login">
                    <button className="rounded-xl bg-blue-500 px-5 py-2 font-bold hover:bg-blue-600">
                      Login
                    </button>
                  </Link>

                  <Link to="/signup">
                    <button className="rounded-xl bg-blue-500 px-5 py-2 font-bold ">
                      Signup
                    </button>
                  </Link>
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
