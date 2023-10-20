import React from "react";
import { NavLink } from "react-router-dom";

const Linkedin = () => {
  return (
    <>
      <button type="button" className="btn fs-5">
        <NavLink to="/">
          <span class="fa fa-linkedin" style={{ color: "#000000" }}></span>
        </NavLink>
      </button>
    </>
  );
};

export default Linkedin;
