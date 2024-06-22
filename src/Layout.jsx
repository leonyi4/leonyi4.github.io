import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Header/Nav";

const Layout = () => {
  return (
    <div className="bg-background-950 text-text-50">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
