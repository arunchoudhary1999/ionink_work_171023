import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Linkedin from "./buttons/Linkedin";
import Twitter from "./buttons/Twitter";
import Medium from "./buttons/Medium";
import Globe from "./buttons/Globe";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#fff", border: "2px solid black" }}
      >
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item mx-4">
                <NavLink
                  className="nav-link text-dark fs-3"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li> */}
              <li className="nav-item mx-4">
                <NavLink className="nav-link text-dark fs-3" to="/experience">
                  Experience
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link text-dark fs-3" to="/book">
                  Book
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link text-dark fs-3" to="/awards">
                  Awards
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link text-dark fs-3" to="/work">
                  Work
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link text-dark fs-3" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link text-dark fs-3" to="/">
                  Portfolio
                </NavLink>
              </li>
              <button type="button" className="btn fs-3 mx-0 px-0">
                <NavLink to="/portfolio">
                  <span class="fa fa-lock" style={{ color: "#000000" }}></span>
                </NavLink>
              </button>
            </ul>
            <Linkedin />
            <Medium />
            <Twitter />
            <Globe />
          </div>
        </div>
      </nav>
      {/* <hr className="my-0" /> */}
    </>
  );
};

export default Header;
