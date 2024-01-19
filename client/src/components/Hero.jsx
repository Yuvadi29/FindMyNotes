import React from "react";

const Hero = () => {
  return (
    <section className="flex h-heroSectionHeight items-center justify-center border border-black bg-blue-500 py-16 text-white">
      <div className="mx-auto text-center">
        <h1 className="mb-4 text-4xl font-black uppercase leading-tight md:text-5xl lg:text-6xl">
          Find My Notes
        </h1>
        <p className="mb-6 text-lg md:text-xl lg:text-2xl">
          Organize, discover, and access your notes seamlessly.
        </p>
        <div className="flex justify-center">
          <button className="rounded-full bg-white px-6 py-3 text-lg font-bold text-blue-500 hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
