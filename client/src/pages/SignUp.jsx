import axios from "axios";
import React, { useState } from "react";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userBio, setUserBio] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const registerUser = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("userBio", userBio);
      formData.append("userEmail", userEmail);
      formData.append("userMobile", userMobile);
      formData.append("userName", userName);
      formData.append("userPassword", userPassword);
      formData.append("profileImage", profileImage);

      const result = await axios.post(
        "http://localhost:7000/auth/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      console.log("Data: ", result);
      alert("User Entry Created in Database");
    } catch (error) {
      console.log("Failed to Register User: ", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded bg-white p-8 shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">Register</h1>
        <form className="space-y-4" onSubmit={registerUser}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
                placeholder="John"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
                placeholder="Doe"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="userBio"
              className="block text-sm font-medium text-gray-700"
            >
              Bio
            </label>
            <textarea
              id="userBio"
              name="userBio"
              rows="3"
              className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
              placeholder="Tell us something about yourself"
              required
              onChange={(e) => setUserBio(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="userEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
              placeholder="john.doe@example.com"
              required
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="userMobile"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="userMobile"
              name="userMobile"
              className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
              placeholder="0000000000"
              required
              onChange={(e) => setUserMobile(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
              placeholder="johndoe123"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="userPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="userPassword"
              name="userPassword"
              className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
              placeholder="********"
              required
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>

          <div className="flex w-full flex-col items-center justify-center">
            <div className="mb-4 grid h-[200px] w-[200px] place-content-center overflow-hidden rounded-full border-2 border-dashed border-gray-300 bg-gray-50 text-2xl font-black">
              {/* 200 x 200 */}
              {profileImage == "" ? (
                <p className="text-sm font-bold text-gray-500">Profile Image</p>
              ) : (
                <img src={profileImage} alt="" className="" />
              )}
            </div>
            <label
              htmlFor="dropzone-file"
              className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <svg
                  className="mb-4 h-8 w-8 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2 "
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">
                    Click to Upload your profile image
                  </span>
                </p>
                <input
                  type="file"
                  placeholder="File"
                  accept="application/png"
                  required
                  id="dropzone-file"
                  onChange={(e) =>
                    setProfileImage(URL.createObjectURL(e.target.files[0]))
                  }
                  className="hidden"
                />
              </div>
            </label>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-sm text-gray-700">
          Already have an account?
          <a href="/login" className="ml-1 text-blue-500 hover:underline">
            <span className="font-bold">Login</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
