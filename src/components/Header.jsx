import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Linkedin from "./buttons/Linkedin";
import Instagram from "./buttons/Instagram";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#fff", border: "2px solid black" }}
      >
        <div className="container-fluid py-1">
          <button
            className="navbar-toggler navTog"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon avbar-toggler"></span>
          </button>
          <div
            className="collapse navbar-collapse headerDivTag"
            id="navbarSupportedContent"
          >
            <div>
              <NavLink class="navbar-brand" to="/">
                <img
                  src="/assets/images/BOL - Black.png"
                  alt="Logo"
                  width="90"
                  height="54"
                  // class="d-inline-block align-text-top"
                />
              </NavLink>
            </div>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                  <NavLink className="nav-link text-dark fs-5" to="/magzines">
                    Magzines
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link text-dark fs-5" to="/">
                    Portfolio
                  </NavLink>
                </li>
                <button type="button" className="btn fs-5 headerLock">
                  <NavLink to="/" className="headerLockLink">
                    <span class="fa fa-lock"></span>
                  </NavLink>
                </button>
                <Linkedin />
                <Instagram />
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <hr className="my-0" /> */}
    </>
  );
};

export default Header;
