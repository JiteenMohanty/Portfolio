import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  // Open the CV modal
  const openCvModal = () => {
    setIsCvModalOpen(true);
  };

  // Close the CV modal
  const closeCvModal = () => {
    setIsCvModalOpen(false);
  };

  // Handle email click to copy to clipboard
  const copyEmailToClipboard = () => {
    const email = "jiteen92718@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard!");
    });
  };

  return (
      <><div className="landing">
      <div className="overlay"></div>
      <div className="main-content">
        <h1>Hi, I'm Jiteen! a passionate Software Developer.</h1>
        <p>Hey there! fellow human.</p>
        <p>Explore my Projects and get to know me better.</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/jiteen-mohanty-61b814133"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://github.com/JiteenMohanty"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          {/* Email link with tooltip */}
          <a href="#" className="email" onClick={copyEmailToClipboard}>
            <i className="fas fa-envelope gmail-icon"></i>{" "}
            jiteen92718@gmail.com
            <span className="email-tooltip">Copy to clipboard</span>
          </a>
          {/* Update the CV link to open the modal */}
          <a href="#" className="cv" onClick={openCvModal}>
            <i className="fas fa-clipboard"></i> CV
          </a>
        </div>
      </div>

      {/* CV Modal */}
      {isCvModalOpen && (
        <div className="cv-modal">
          <div className="cv-modal-content">
            <span className="cv-modal-close" onClick={closeCvModal}>
              &times;
            </span>
            <iframe
              src="./Resume.pdf"
              width="100%"
              height="600px"
              title="CV Preview"
              frameBorder="0" />
          </div>
        </div>
      )}
    </div><div className="gap"></div><div className="navbar">
        <Link className="navbar-section navbar-link" to="/about">
          <i className="fas fa-user"></i> About
        </Link>
        <Link className="navbar-section navbar-link" to="/">
          <i className="fas fa-home"></i> Home
        </Link>
        <Link className="navbar-section navbar-link" to="/projects">
          Projects <i className="fas fa-laptop-code"></i>
        </Link>
      </div></>
  );
};

export default Home;
