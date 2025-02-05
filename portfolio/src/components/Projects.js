import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="landing">
        <div className="overlay"></div>
        <div className="main-content">
          <h1>My Projects</h1>
          <p>
            Below are some of the projects I’ve worked on. Click on each to
            learn more!
          </p>
          <ul>
            <li>
              <strong>Project 1:</strong> A brief description of Project 1.
            </li>
            <li>
              <strong>Project 2:</strong> A brief description of Project 2.
            </li>
            <li>
              <strong>Project 3:</strong> A brief description of Project 3.
            </li>
          </ul>
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

export default Projects;
