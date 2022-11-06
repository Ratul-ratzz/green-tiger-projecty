import React from "react";
import CompanyLogo from "./logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navigation container">
        <div className="logo_container">
          <img
            src={CompanyLogo}
            alt="BigCo Inc. logo"
            height="80"
            width="150"
          />
        </div>
        <div className="bar_icon">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
