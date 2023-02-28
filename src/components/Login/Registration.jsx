import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

import Toast from "../Navbar/Toast";
import Navbar from "../Navbar/Navbar";

const Registration = () => {
  const navigate = useNavigate();
  const [error, seterror] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [authData, setAuthData] = useState({
    name: "",
    gender: "",
    email: "",
    password: "",
    mobile_number: "",
    confirm_password: "",
  });

  const register = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 10000);

    let data = {
      name: authData.name,
      gender: authData.gender,
      email: authData.email,
      password: authData.password,
      confirm_password: authData.confirm_password,
      mobile_number: authData.mobile_number,
    };
    console.log(data);
    axios
      .post(`http://127.0.0.1:8000/api/register`, data)
      .then((response) => {
        if (response.data.status === 200) {
          navigate(`/`);
        }
      })
      .catch(function (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          seterror(error.response.data.message);
        } else {
          seterror(
            "An error occurred while logging in. Please try again later."
          );
        }
      });
  };
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 w-full h-screen overflow-x-hidden overflow-y-auto md:inset-0"
      aria-modal="true"
      aria-hidden="true"
      role="dialog"
    >
      <Navbar />
      <div className=" flex items-center justify-center min-h-screen">
        <div className="relative bg-white rounded-lg shadow dark:bg-blue-600">
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Sign up to our platform
            </h3>
            <form className="space-y-6" action="#">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  onChange={(e) => {
                    setAuthData({
                      ...authData,
                      name: e.target.value,
                    });
                  }}
                  className="bg-black-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-white-500 dark:placeholder-white-400 dark:text-black"
                  placeholder="Jhon Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={authData.email}
                  onChange={(e) => {
                    setAuthData({
                      ...authData,
                      email: e.target.value,
                    });
                  }}
                  className="bg-black-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-white-500 dark:placeholder-white-400 dark:text-black"
                  placeholder="JhonDoe@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Gender
                </label>
                {/* <input
                  name="gender"
                  id="gender"
                  className="bg-black-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-white-500 dark:placeholder-white-400 dark:text-black"
                  required
                /> */}
                <select
                  id="gender"
                  name="gender"
                  value={authData.gender}
                  onChange={(e) => {
                    setAuthData({
                      ...authData,
                      gender: e.target.value,
                    });
                  }}
                  required
                  className="bg-black-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-white-500 dark:placeholder-white-400 dark:text-black"
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="mobile_number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mobile Number
                </label>
                <input
                  name="mobile_number"
                  id="mobile_number"
                  value={authData.mobile_number}
                  onChange={(e) => {
                    setAuthData({
                      ...authData,
                      mobile_number: e.target.value,
                    });
                  }}
                  className="bg-black-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-white-500 dark:placeholder-white-400 dark:text-black"
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full mb-2 md:mr-2 md:mb-0">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      value={authData.password}
                      onChange={(e) => {
                        setAuthData({
                          ...authData,
                          password: e.target.value,
                        });
                      }}
                      className="bg-black-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  pr-3 dark:bg-white-600 dark:border-white-500 dark:placeholder-white-400 dark:text-black"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 mt-1 right-10 flex items-center text-sm leading-5 text-gray-400 hover:text-gray-500 focus:outline-none"
                      onClick={handleShowPassword}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <EyeIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="w-full md:ml-2">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="••••••••"
                      value={authData.confirm_password}
                      onChange={(e) => {
                        setAuthData({
                          ...authData,
                          confirm_password: e.target.value,
                        });
                      }}
                      className="bg-black-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-3 dark:bg-white-600 dark:border-white-500 dark:placeholder-white-400 dark:text-black"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 mt-1 right-10 flex items-center text-sm leading-5 text-gray-400 hover:text-gray-500 focus:outline-none"
                      onClick={handleShowPassword}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <EyeIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              {showToast && <Toast message={error} />}

              <button
                onClick={(e) => {
                  register(e);
                }}
                type="submit"
                className="w-full text-black bg-slate-100 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
              >
                Create account
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Already registered?{" "}
                <Link
                  href="#"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
