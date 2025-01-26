import React from "react";
import { Link } from "react-router-dom";
import "./Transitions.css";

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
        <Link className="navbar-link" to="/about">
          <i className="fas fa-user"></i> About
        </Link>
        <Link className="navbar-link" to="/">
          Home <i className="fas fa-home"></i>
        </Link>
      </div>
    </>
  );
};

export default Projects;
