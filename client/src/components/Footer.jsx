import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center p-10">
      <div className="flex h-full w-full flex-col items-center justify-center border border-red-500">
        <div className="max-w-[400px] border border-black">
          <h2 className="relative text-2xl font-black before:absolute before:top-[30px] before:h-[3px] before:w-[50px] before:bg-blue-500">
            About Us
          </h2>
          <p className="">
            Because your planning is not always perfect, you need to be able to
            study whenever, wherever. Just read your notes one last time on your
            tablet or phone while you're on the go.
          </p>
        </div>
        <div className="h-[100px] w-[100px] border border-black"></div>
        <div className="h-[100px] w-[100px] border border-black"></div>
      </div>
    </footer>
  );
};

export default Footer;
