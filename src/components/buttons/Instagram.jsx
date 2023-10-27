import React from "react";
import { NavLink } from "react-router-dom";

const Instagram = () => {
  return (
    <>
      <button type="button" className="btn fs-5 instagramIcon">
        <NavLink to="/" className="instagramIconInner">
          <span class="fa fa-instagram" style={{ color: "#000000" }}></span>
        </NavLink>
      </button>
    </>
  );
};

export default Instagram;
