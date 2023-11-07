import React from "react";
// import { NavLink } from "react-router-dom";

const Instagram = () => {
  return (
    <>
      <button type="button" className="btn fs-5 instagramIcon">
        <a
          href="https://www.instagram.com/?hl=en"
          className="instagramIconInner"
        >
          <span class="fa fa-instagram" style={{ color: "#000000" }}></span>
        </a>
      </button>
    </>
  );
};

export default Instagram;
