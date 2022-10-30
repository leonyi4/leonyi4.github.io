import React from "react";
import './Home.css'
import ContactMe from "./ContactMe";
import cat from "../../assets/cool-cat.png"

const Home = () => {
  return (
    <header>
      <div className="container header__container">
        <h2 style={{color:"var(--color-primary)"}}>Hello I'm</h2>
        <h1 className="name">Nyi Nyein Aung</h1>
        <h4>I am a Third Year IT student</h4>
        <ContactMe/>

        <div className="cool">
          <img src={cat} alt="cool cat" />
        </div>
      </div>
    </header>
  );
};

export default Home;
