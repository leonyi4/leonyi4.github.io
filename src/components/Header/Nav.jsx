import React, { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="flex flex-col justify-center items-center mt-4 font-medium sm:flex-row sm:space-x-8 sm:mt-0">
      <li className="w-full text-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                    ${isActive ? "text-text-200" : "text-text-50"}
                    sm:hover:bg-transparent sm:border-0 hover:text-text-200 sm:p-0 my-3
                    `
          }
        >
          Home
        </NavLink>
      </li>
      <li className="w-full text-center">
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                    ${isActive ? "text-text-200" : "text-text-50"} 
                    sm:hover:bg-transparent sm:border-0 hover:text-text-200 sm:p-0 my-3`
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="w-full text-center">
        <NavLink
          to="/publications"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                    ${isActive ? "text-text-200" : "text-text-50"}
                    sm:hover:bg-transparent sm:border-0 hover:text-text-200 sm:p-0 my-3`
          }
        >
          Publications
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `block bg-primary-500 font-medium rounded-sm text-sm px-4 sm:px-5 py-2 sm:py-2.5 
                      ${isActive ? "text-text-900" : "text-text-50"}
                      sm:hover:bg-transparent sm:border-0  hover:bg-primary-600 sm:p-0 my-3`
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    console.log("Yay");
  };

  return (
    <>
      <nav className="bg-background text-text border-gray-200 px-4 sm:px-6 py-2.5 border-b-2">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/04/Clash-Royale-logo.png"
              className="h-12"
              alt="Logo"
            />
          </Link>
          <div className="hidden justify-between items-center w-full sm:flex sm:w-auto sm:order-1">
            <NavLinks />
          </div>
          <div className="flex flex-col justify-between sm:hidden">
            <button className="w-14 h-12" onClick={toggleNav}>
              {isOpen ? (
                <IoMdClose className="w-12 h-10" />
              ) : (
                <IoIosMenu className="w-12 h-10" />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden">
            <NavLinks />
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
