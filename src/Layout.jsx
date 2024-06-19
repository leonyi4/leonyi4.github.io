import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Header/Nav";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
