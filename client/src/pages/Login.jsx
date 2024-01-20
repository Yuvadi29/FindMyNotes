import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUserData } from '../Redux/slices/user-slice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      const user = {
        userEmail,
        userPassword
      };

      const result = await axios.post("http://localhost:7000/auth/login", user);
      console.log("User Logged In Successfully: ", result);
      dispatch(setUserData(result.data));
      alert("User Logged In Successfully");
      navigate("/");
    } catch (error) {
      console.log("Error Logging in: ", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="userEmail" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-primary-300 focus:border-primary-300"
              placeholder="your.email@example.com"
              required
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="userPassword" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="userPassword"
              name="userPassword"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-primary-300 focus:border-primary-300"
              placeholder="********"
              required
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none"
          >
            Log in
          </button>
        </form>

        {/* Additional Buttons */}
        <div className="mt-4 flex justify-between items-center">
          <Link to="/signup" className="text-sm text-primary-600 hover:underline">
            Create an account
          </Link>
          <Link to="/forgot-password" className="text-sm text-gray-600 hover:underline">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
