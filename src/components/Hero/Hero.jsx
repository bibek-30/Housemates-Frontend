import React from "react";
import homeImage from "../../assets/hero-img.jpg";
import { useNavigate } from "react-router-dom";
import Statistic from "./Statistic";
import Testimonial from "./Testimonial";

const Hero = () => {
  const navigate = useNavigate();
  const handleStarted = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="text-white h-screen">
        <div
          className="relative h-3/4 w-full bg-center bg-cover"
          style={{ backgroundImage: `url(${homeImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 ">
              <h1 className="text-4xl font-bold leading-none dark:text-white">
                Find The Perfect Accommodations!
              </h1>
              <p className="px-8 mt-8 mb-12 text-lg sm:text-2xl">
                Search the largest selection of luxury high-rise apartments,
                multi-family homes, and luxury homes.
              </p>
              <div className="flex flex-wrap justify-center">
                <button
                  onClick={handleStarted}
                  className="px-8 py-3 m-2 text-lg font-semibold rounded bg-white text-gray-900 dark:bg-violet-400 dark:text-gray-900"
                >
                  Get started
                </button>
                <button className="px-8 py-3 m-2 text-lg border rounded text-gray-900 dark:text-gray-50 dark:border-gray-700">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <Statistic />
      </div>
      <Testimonial />
    </div>
  );
};

export default Hero;
