import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-white border-blue-400 px-2 sm:px-4 py-2.5 rounded dark:bg-blue-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to={"/"} className="text-white flex items-center">
          <BsFillHouseFill className="w-8 h-8" />
          <span className="ml-1 text-xl font-bold">HouseMates</span>
        </Link>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-blue-500 rounded-lg md:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-blue-400 dark:hover:bg-blue-600 dark:focus:ring-blue-600"
          aria-expanded={showMenu ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 border border-blue-100 rounded-lg bg-blue-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-blue-800 md:dark:bg-blue-600 dark:border-blue-800">
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
                to={"/rooms"}
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
                to={"/add-room"}
              >
                Add Rooms
              </Link>
            </li>
            <li>
              <Link
                to={"/login"}
                className="block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h5m0 0v10m0-10l-4-4m4 4l-4 4"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-blue-700 rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 17l4 4m0 0l4-4m-4 4V3"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
