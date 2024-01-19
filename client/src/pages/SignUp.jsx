import axios from 'axios';
import React, { useState } from 'react';

const SignUp = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userBio, setUserBio] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const registerUser = async (e) => {
    try {
      e.preventDefault();

      const userData = {
        firstName,
        lastName,
        userBio,
        userEmail,
        userMobile,
        userName,
        userPassword,
      };

      const result = await axios.post("http://localhost:7000/auth/signup", userData);
      console.log("Data: ", result);
      alert("User Entry Created in Database");

    } catch (error) {
      console.log("Failed to Register User: ", error);
    }

  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Register</h1>
        <form className="space-y-4" onSubmit={registerUser}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="John"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Doe"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="userBio" className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea
              id="userBio"
              name="userBio"
              rows="3"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Tell us something about yourself"
              required
              onChange={(e) => setUserBio(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="john.doe@example.com"
              required
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="userMobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="tel"
              id="userMobile"
              name="userMobile"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="0000000000"
              required
              onChange={(e) => setUserMobile(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="userName"
              name="userName"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="johndoe123"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="userPassword" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="userPassword"
              name="userPassword"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="********"
              required
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
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
