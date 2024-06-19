import React from "react";
import { NavLink } from "react-router-dom";
import check from "../../../assets/kevin heart.gif";
import Card from "../Reusable/Card";

const Home = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-wrap justify-around items-center py-12 my-12 px-4 ">
          <div className="flex w-1/4 justify-center">
            <img
              className="flex items-center h-56"
              src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"
              alt="Photo"
            />
          </div>
          <div className="flex flex-col w-1/2 justify-center items-center text-center ">
            <h1 className="text-5xl p-4 m-2">Hi, I am Leo!</h1>
            <p className="text-xl p-2 m-2 max-w-2xl">
              I am an MSc in Computer Science and Information Technology student
              with a passion for data science and web development projects.
              <br />
              <br />I am a fast learner who thrives in both independent and team
              environments, quickly adapting to new challenges and consistently
              delivering high-quality results. Feel free to contact me if you
              are interested in collaboration or would like to learn more about
              my work.
            </p>
          </div>
        </div>
        <div className="flex justify-center mx-auto max-w-screen-2xl px-12 space-x-8">
          <NavLink
            to="/contact"
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Contact Me
          </NavLink>
          <a
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href={check}
            download
          >
            Download Resume
          </a>
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
