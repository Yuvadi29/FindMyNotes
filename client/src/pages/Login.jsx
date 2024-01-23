import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUserData } from "../Redux/slices/user-slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        userPassword,
      };

      const result = await axios.post("http://localhost:7000/auth/login", user);
      console.log("User Logged In Successfully: ", result);
      // console.log(result.data);

      dispatch(setUserData(result.data));

      // window.alert("Logged In");

      toast("Wow so easy !");
      navigate("/");

      // setTimeout(() => {
      //   navigate("/");
      // }, 3000);
    } catch (error) {
      console.log("Error Logging in: ", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Login</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="userEmail"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              className="focus:ring-primary-300 focus:border-primary-300 mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring"
              placeholder="your.email@example.com"
              required
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="userPassword"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="userPassword"
              name="userPassword"
              className="focus:ring-primary-300 focus:border-primary-300 mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring"
              placeholder="********"
              required
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Log in
          </button>
          <ToastContainer />
        </form>

        {/* Additional Buttons */}
        <div className="mt-4 flex items-center justify-between">
          New to FindMyNotes?
          <Link
            to="/signup"
            className="text-primary-600 text-sm hover:underline"
          >
            <span className="font-bold">Create an account</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
