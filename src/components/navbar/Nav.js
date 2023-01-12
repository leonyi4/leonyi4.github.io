import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactsIcon from "@mui/icons-material/Contacts";
import HomeIcon from "@mui/icons-material/Home";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./Nav.css";

const Nav = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const educationRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const cName = inView ? "fade-in" : "";

  const sections = document.querySelectorAll("section");
  window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    if (current === "") {
      homeRef.current.className = "active";
    } else {
      homeRef.current.className = "";
    }
    if (current === "about") {
      aboutRef.current.className = "active";
    } else {
      aboutRef.current.className = "";
    }
    if (current === "skills") {
      skillsRef.current.className = "active";
    } else {
      skillsRef.current.className = "";
    }
    if (current === "education") {
      educationRef.current.className = "active";
    } else {
      educationRef.current.className = "";
    }
    if (current === "projects") {
      projectsRef.current.className = "active";
    } else {
      projectsRef.current.className = "";
    }
    if (current === "contact") {
      contactRef.current.className = "active";
    } else {
      contactRef.current.className = "";
    }
  };

  return (
    <nav className={cName} ref={ref}>
      <a ref={homeRef} href="#" className="active">
        <HomeIcon />
      </a>
      <a ref={aboutRef} href="#about" className="">
        <AccountCircleIcon />
      </a>
      <a ref={skillsRef} href="#skills" className="">
        <StarIcon />
      </a>

      <a ref={educationRef} href="#education" className="">
        <SchoolIcon />
      </a>
      <a ref={projectsRef} href="#projects" className="">
        <LocalLibraryIcon />
      </a>

      <a ref={contactRef} href="#contact" className="">
        <ContactsIcon />
      </a>
    </nav>
  );
};

export default Nav;
