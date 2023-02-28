import React from "react";

import Avatar from "../../assets/Bibekk.jpg";
import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <>
      <div className="container border">
        <div className="bg-white">
          <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            <div className="relative">
              <div className="absolute top-0 right-0 text-9xl -mt-5 text-gray-200 opacity-75 font-serif">
                “
              </div>
              <div className="relative text-center">
                <div className="my-0"></div>
                <blockquote className="lg:w-2/3 xl:w-1/2 mx-auto">
                  <p className="font-semibold text-xl leading-8 mb-5">
                    This web app helps people find the perfect room quickly and
                    easily. This would give potential users a more detailed
                    understanding of how the app works and the benefits it
                    provides.
                  </p>
                  <footer className="space-y-4">
                    <Link
                      to={"https://www.instagram.com/bibek.stha.735/"}
                      target="_blank"
                      className="block mx-auto rounded-full overflow-hidden w-20 h-20 transform transition ease-out duration-150 border-2 border-gray-50 hover:border-white hover:shadow-md hover:scale-125 active:border-gray-50 active:shadow-sm active:scale-110"
                    >
                      <img src={Avatar} alt=" Photo" />
                    </Link>
                    <div>
                      <Link
                        target="_blank"
                        to={"https://www.instagram.com/bibek.stha.735/"}
                        className="text-lg font-semibold text-blue-600 hover:text-blue-400"
                      >
                        Bibek Shrestha
                      </Link>
                      <div className="mx-auto w-10 h-1 my-1 rounded-lg bg-blue-200" />
                      <p className="text-gray-500 font-medium">
                        Founder and Lead Developer
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
