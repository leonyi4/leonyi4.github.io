import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white border-y mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
      <div className="sm:flex sm:flex-wrap sm:justify-between">
        <div className="mb-6 sm:mb-0 flex justify-center">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-16"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 sm:text-start">
          <div className="text-right">
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:underline">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <Link to="/publications" className="hover:underline">
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
