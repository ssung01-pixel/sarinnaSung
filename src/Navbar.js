import React from "react";
import "./css/Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <div className="navbar-logo">
            <button className="navbar-btn">
              {" "}
              <a href="#/">Sarinna Sung</a>
            </button>
          </div>
          <div>
            <button className="navbar-btn">
              <a href="#/Projects">Projects</a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
