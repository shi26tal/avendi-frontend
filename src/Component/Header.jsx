// Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.svg";
import "../ComponentStyle/Header.css";

const Header = () => {
  return (
    <header className="header-area">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <NavLink to="/">
              <img src={logo} alt="avendi logo" className="logo" />
            </NavLink>
          </div>

          <div className="header-right">
            <NavLink to="/">
              <img
                src="/whatsapp.png"
                alt="WhatsApp"
                className="whatsapp-icon"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
