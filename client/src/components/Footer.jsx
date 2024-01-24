import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="flex items-center justify-center p-16">
      <div className="flex h-full w-full flex-col gap-10 lg:flex-row lg:justify-around">
        <div className=" lg:w-[450px]">
          <h2 className="relative mb-3 text-2xl font-black before:absolute before:top-[30px] before:h-[3px] before:w-[50px] before:bg-blue-500">
            About Us
          </h2>
          <p className="text-gray-600">
            Because your planning is not always perfect, you need to be able to
            study whenever, wherever. Just read your notes one last time on your
            tablet or phone while you're on the go.
          </p>
        </div>
        <div className="">
          <h2 className="relative mb-3 text-2xl font-black before:absolute before:top-[30px] before:h-[3px] before:w-[50px] before:bg-blue-500">
            Quick Links
          </h2>
          <ul className="text-gray-600">
            <li className="mb-1">
              <Link to="/about">About</Link>
            </li>
            <li className="mb-1">
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="relative mb-3 text-2xl font-black before:absolute before:top-[30px] before:h-[3px] before:w-[50px] before:bg-blue-500">
            Contact Info
          </h2>
          <ul class="info">
            <li className="mb-1">
              <a href="tel:+91 99879 90097">
                <span>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </span>
              </a>
              <p>
                <a href="tel:+91 99879 90097"></a>
                <a href="tel:+">+91 99879 90097</a>
              </p>
            </li>
            <li className="mb-1">
              <a href="tel:+91 97649 35361">
                <span>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </span>
              </a>
              <p>
                <a href="tel:+91 97649 35361"></a>
                <a href="tel:+">+91 97649 35361</a>
              </p>
            </li>
            <li className="mb-1">
              <span>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </span>
              <p>
                <a href="mailto:findmynotes2022@gmail.com" target="_blank">
                  findmynotes2022@gmail.com
                </a>
              </p>
              <a href="mailto:findmynotes2022@gmail.com" target="_blank"></a>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
