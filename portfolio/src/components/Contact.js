import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <><div className="landing">
          <div className="overlay"></div>
          <div className="main-content">
              <h1>Contact Me</h1>
              <p>
                  You can reach out to me via:
              </p>
              <ul>
                  <li>Email: <a href="mailto:jiteen92718@gmail.com">jiteen92718@gmail.com</a></li>
                  <li>LinkedIn: <a href="https://www.linkedin.com/in/jiteen-mohanty-61b814133" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
                  <li>GitHub: <a href="https://github.com/JiteenMohanty" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
              </ul>
          </div>
      </div><div className="gap"></div><div className="navbar">
              <Link className="navbar-link" to="/">Home</Link>
              <Link className="navbar-link" to="/about">About</Link>
              <Link className="navbar-link" to="/projects">Projects</Link>
          </div></>
  );
};

export default Contact;
