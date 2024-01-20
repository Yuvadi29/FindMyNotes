import React from "react";

const Profile = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center border border-red-500">
      {/* section 1 */}
      <div className="flex w-full flex-col items-center justify-center border-[3px] border-green-500 py-4">
        <div className="grid h-[200px] w-[200px] place-content-center overflow-hidden rounded-full bg-gray-400 text-2xl font-black">
          {/* 200 x 200 */}
          <img src="./sample-profile.avif" alt="" className="" />
        </div>
        {/* title - bio section  */}
        <div className="mx-10">
          <div className=" my-2 flex flex-col items-center justify-center ">
            <h2 className="text-2xl font-black">
              <span>Aditya</span> <span>Trivedi</span>
            </h2>
            <p className="mt-1 text-center">
              "I'm Aditya Trivedi, and I recently graduated with an advanced
              diploma from Smith secondary school. I'm seeking an internship
              where I can apply my skills in content creation and increase my
              experience in digital marketing."
            </p>
          </div>
          {/* counts */}
          <div className="flex items-center justify-center gap-4">
            <div className="grid h-[80px] w-[100px] place-content-center">
              <p className="text-center text-[12px] font-bold">
                No. of Uploads :
              </p>
              <p className="text-center text-5xl font-black">10</p>
            </div>
            <span className="h-[60px] w-[1px] bg-gray-400" />
            <div className="grid h-[80px] w-[100px] place-content-center">
              <p className="text-center text-[12px] font-bold">
                No. of Files :
              </p>
              <p className="text-center text-5xl font-black">10</p>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="h-[1000px] w-full border-[3px] border-amber-500">
        <h1 className="text-xl font-black">My Documents :</h1>
      </div>
    </div>
  );
};

export default Profile;
