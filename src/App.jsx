import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Header/Nav";

function App() {
  return (
    <>
      <Nav />
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <Footer />
    </>
  );
}

export default App;
