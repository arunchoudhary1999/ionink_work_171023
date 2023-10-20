import React from "react";
import { NavLink } from "react-router-dom";

const Medium = () => {
  return (
    <div>
      <button type="button" className="btn fs-5">
        <NavLink to="/">
          <span class="fa fa-medium" style={{ color: "#000000" }}></span>
        </NavLink>
      </button>
    </div>
  );
};

export default Medium;
