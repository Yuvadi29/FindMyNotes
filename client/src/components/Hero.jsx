import React from "react";

const Hero = () => {
  return (
    <section className="bg-unsplashBgImage relative flex h-heroSectionHeight items-center justify-center border border-black bg-cover bg-center py-16 text-white">
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      <div className="z-10 mx-auto text-center">
        <h1 className="mb-4 text-4xl font-black uppercase leading-tight md:text-5xl lg:text-6xl">
          Find My Notes
        </h1>
        <p className="lg: mb-6 px-4 text-sm font-light md:text-xl lg:px-40">
          {/* Organize, discover, and access your notes seamlessly. */}
          Welcome to Find My Notes – where students unite for effortless
          organization, access, and sharing of PDF notes. Say goodbye to
          scattered notebooks; streamline your study routine and embark on a
          journey to academic excellence. Simplify your student life, make your
          notes work for you – discover a new era of innovation, start today
        </p>
        <div className="flex justify-center">
          <button className="mr-10 rounded-xl bg-white px-6 py-3 text-lg font-bold text-blue-500 hover:bg-gray-100">
            Login
          </button>
          <button className="rounded-xl bg-white px-6 py-3 text-lg font-bold text-blue-500 hover:bg-gray-100">
            Signup
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
