import React from "react";
import { NavLink } from "react-router-dom";
import check from "../../../assets/kevin heart.gif";
import Card from "../Reusable/Card";

const Home = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl">
        <div className="sm:flex sm:flex-wrap justify-around items-center py-12 mt-12 px-4 ">
          <div className="sm:flex sm:w-1/4 justify-center ">
            <img
              className="flex items-center justify-center mx-auto
              h-36 sm:h-56 md:h-60 lg:h-72 "
              src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"
              alt="Photo"
            />
          </div>
          <div className="flex flex-col sm:w-1/2 justify-center items-center text-center ">
            <h1 className="lg:text-4xl md:text-3xl text-xl p-4 m-2">
              Hi, I am Leo!
            </h1>
            <p className=" p-2 m-2 max-w-2xl lg:text-lg md:text-base text-sm">
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

          <div
            className="flex justify-center text-center mx-auto max-w-screen-2xl px-12 space-x-8 
          mt-4 sm:mt-12"
          >
            <NavLink
              to="/contact"
              className="bg-primary-500 hover:bg-primary-600 text-text-50  rounded-md 
              px-2  py-1 md:py-2 md:px-4 lg:px-5 lg:py-2.5
              font-medium text-xs sm:text-sm md:text-base"
            >
              Contact Me
            </NavLink>
            <a
              className="btn bg-secondary-400 text-text-950 hover:bg-secondary-500 rounded-md 
              px-2  py-1 md:py-2 md:px-4 lg:px-5 lg:py-2.5
              font-medium text-xs sm:text-sm md:text-base"
              href={check}
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="flex-col justify-center max-w-screen-2xl mx-auto">
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
