import React from "react";
import Card from "../Reusable/Card";

const Home = () => {
  return (
    <>
      <div className="py-2.5 px-4 flex flex-wrap justify-around items-center mx-auto max-w-screen-xl">
        <img
          className="flex items-center h-48"
          src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"
          alt="Photo"
        />
        <div className="items-center text-center">
          <h1 className="text-4xl p-4 m-2">Hi, Nyi Nyein Aung</h1>
          <p className="text-xl p-2 m-2">Welcome to my portfolio website</p>
          <button className="text-lg border bg-green-500 text-white">
            Learn more about me
          </button>
        </div>
      </div>
      <div className="flex-col justify-center">
        <div className="font-2xl text-center ">Check out my work</div>
        <Card
          title="Publications"
          desc="ECTI DAMT & NCON 2024"
          img="http://icdamt.org/2023/images/damt2023Header.png"
        />
      </div>
    </>
  );
};

export default Home;
