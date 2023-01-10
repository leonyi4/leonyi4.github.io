import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactsIcon from "@mui/icons-material/Contacts";
import HomeIcon from "@mui/icons-material/Home";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Nav.css";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const cName = inView ? "fade-in" : "";

  return (
    <nav className={cName} ref={ref}>
      <a
        href="#"
        onClick={() => {
          setActiveNav("#");
        }}
        className={activeNav === "#" ? "active" : ""}
      >
        <HomeIcon />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNav("#about");
        }}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AccountCircleIcon />
      </a>
      <a
        href="#skills"
        onClick={() => {
          setActiveNav("#skills");
        }}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <StarIcon />
      </a>

      <a
        href="#education"
        onClick={() => {
          setActiveNav("#education");
        }}
        className={activeNav === "#education" ? "active" : ""}
      >
        <SchoolIcon />
      </a>
      <a
        href="#projects"
        onClick={() => {
          setActiveNav("#projects");
        }}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <LocalLibraryIcon />
      </a>

      <a
        href="#contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <ContactsIcon />
      </a>
    </nav>
  );
};

export default Nav;
