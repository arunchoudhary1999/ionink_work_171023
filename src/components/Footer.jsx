import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        border: "2px solid black",
        height: "auto",
        padding: "0px 10px 0px 22px",
      }}
    >
      <nav class="navbar">
        <div>
          <NavLink class="navbar-brand" to="/">
            <img
              src="/assets/images/BOL - Black.png"
              alt="Logo"
              width="90"
              height="54"
              class="d-inline-block align-text-top"
            />
          </NavLink>
        </div>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <NavLink class="nav-link text-dark" to="/">
                    Google
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link text-dark" to="/">
                    Privacy
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link text-dark" to="/">
                    Terms
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link text-dark" to="/">
                    Transparency
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link text-dark" to="/">
                    Center
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default Footer;
