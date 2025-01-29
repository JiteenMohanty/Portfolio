import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="landing">
        <div className="overlay"></div>
        <div className="main-content">
          <h1>About Me</h1>
          <p>
            I am a passionate Software Developer with a focus on building web
            applications. I thrive on learning new technologies and creating
            innovative solutions.
          </p>
        </div>
      </div>
      <div className="gap"></div>
      <div className="navbar">
        <Link className="navbar-section navbar-link" to="/about">
          <i className="fas fa-user"></i> About
        </Link>
        <Link className="navbar-section navbar-link" to="/">
          <i className="fas fa-home"></i> Home
        </Link>
        <Link className="navbar-section navbar-link" to="/projects">
          Projects <i className="fas fa-laptop-code"></i>
        </Link>
      </div>
    </>
  );
};

export default About;
