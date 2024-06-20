import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="bg-background text-text border-gray-200 px-4 md:px-6 py-2.5 border-b-2">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-text-200"
                                            : "text-text-50"
                                        } md:hover:bg-transparent md:border-0 hover:text-text-200 md:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-text-200"
                                            : "text-text-50"
                                        } md:hover:bg-transparent md:border-0 hover:text-text-200 md:p-0`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/publications"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-text-200"
                                            : "text-text-50"
                                        } md:hover:bg-transparent md:border-0 hover:text-text-200 md:p-0`
                  }
                >
                  Publications
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `bg-primary-500 font-medium rounded-md text-sm px-4 md:px-5 py-2 md:py-2.5 mr-2 
                                        ${
                                          isActive
                                            ? "text-text-900"
                                            : "text-text-50"
                                        } md:hover:bg-transparent md:border-0  hover:bg-primary-600 md:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
