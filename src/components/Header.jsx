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
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#fff", borderBottom: "1px solid black" }}
      >
        <div className="container-fluid py-1">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon avbar-toggler"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item mx-4">
                <NavLink
                  className="nav-link text-dark fs-5"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li> */}
              <li className="nav-item mx-2">
                <NavLink className="nav-link text-dark fs-5" to="/experience">
                  Experience
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link text-dark fs-5" to="/book">
                  Book
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link text-dark fs-5" to="/awards">
                  Awards
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link text-dark fs-5" to="/work">
                  Work
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link text-dark fs-5" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link text-dark fs-5" to="/">
                  Portfolio
                </NavLink>
              </li>
              <button type="button" className="btn fs-5 mx-0 px-0 headerLock">
                <NavLink to="/portfolio" className="headerLockLink">
                  <span class="fa fa-lock" style={{ color: "#c4c4c4" }}></span>
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
