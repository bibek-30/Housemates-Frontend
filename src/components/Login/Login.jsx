import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

import Toast from "../Navbar/Toast";
import Navbar from "../Navbar/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("remember_me", rememberMe);

    try {
      const res = await axios.post(`http://127.0.0.1:8000/api/login`, formData);
      const { user, token } = res.data;

      // Store the token and user data in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect to the home page
      navigate("/");
    } catch (err) {
      console.error(err);

      if (err.response && err.response.data && err.response.data.message) {
        seterror(err.response.data.message);
      } else {
        seterror("An error occurred while logging in. Please try again later.");
      }
    }
  };

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-50 w-full h-screen overflow-x-hidden overflow-y-auto md:inset-0"
        aria-modal="true"
        aria-hidden="true"
        role="dialog"
      >
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="relative bg-white rounded-lg shadow dark:bg-blue-600">
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-black-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-white-500 dark:placeholder-white-400 dark:text-black"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-black-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-white-500 dark:placeholder-white-400 dark:text-black"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 mt-3.5 right-10 flex items-center text-sm leading-5 text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <EyeIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </button>
                  {/* {error && <div className="text-red-400">{error}</div>} */}
                  {showToast && <Toast message={error} />}
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    href="#"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-black bg-slate-100 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
                >
                  Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <Link
                    href="#"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <button
        onClick={toggleModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>

      {/* Main modal */}
      {/* {showModal && ()} */}
    </>
  );
};

export default Login;
