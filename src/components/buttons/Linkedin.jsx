import React from "react";
// import { NavLink } from "react-router-dom";
import "../Header.css";

const Linkedin = () => {
  return (
    <>
      <button type="button" className="btn fs-5 linkedinIcon">
        <a href="https://www.linkedin.com/login" className="linkedinIconInner">
          <span class="fa fa-linkedin" style={{ color: "#000000" }}></span>
        </a>
      </button>
    </>
  );
};

export default Linkedin;
