import React, { useState } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="#">My Site</a>
        </div>
        <button
          className={`navbar-toggle ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggle-icon"></span>
        </button>
        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
