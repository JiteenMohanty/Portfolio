import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Layout component to wrap all pages
const Layout = ({ children }) => {
  
  // Function to handle mouse movement and tilt effect
  const handleMouseMove = (e) => {
    const overlay = document.querySelector(".overlay");

    // Get the center position of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calculate the distance from the center of the screen
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Apply a slight tilt effect
    const tiltX = deltaY / 10; // Control the strength of the tilt
    const tiltY = deltaX / 10;

    // Apply the transform to the overlay element
    overlay.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  // Set up event listener on mount and clean up on unmount
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="overlay"></div>
      {/* Render the children, which are the individual page contents */}
      {children}
    </>
  );
};

export default Layout;
