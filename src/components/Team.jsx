import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Team.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Team = () => {
  const reveal = () => {
    const reveals = document.querySelectorAll(".teamReveals");
    const revealpoint = 100; // You can adjust this value based on your requirements

    for (let i = 0; i < reveals.length; i++) {
      const windowheight = window.innerHeight;
      const revealtop = reveals[i].getBoundingClientRect().top;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);
  return (
    <div style={{ border: "2px solid black" }} className="teamTopOneDiv">
      <div className="App">
        <div className="teamText teamReveals">
          <h1 className="teamTextH1" style={{ textAlign: "center" }}>
            Meet The Team
          </h1>
          {/* <h4>
            At Brands Out Loud, we’ve got behind-the-scenes maestros who are 50%
            wizards, 50% mavericks, and 100% super-ready to shout out loud.
          </h4> */}
        </div>
        <Carousel breakPoints={breakPoints} className="carouselDiv teamReveals">
          <Item>
            {" "}
            <i class="fa fa-plus-circle addIcon"></i>
            <img
              src="/assets/images/client.webp"
              alt="Logo"
              width="150"
              height="150"
              class="d-inline-block align-text-top teamImg"
            />
            <h3 className="teamImgH3">Suhas M</h3>
            <h6 className="teamImgH6">Chief Storyteller</h6>
          </Item>
          <Item>
            {" "}
            <i class="fa fa-plus-circle addIcon"></i>
            <img
              src="/assets/images/client.webp"
              alt="Logo"
              width="150"
              height="150"
              class="d-inline-block align-text-top teamImg"
            />
            <h3 className="teamImgH3">Rammona M</h3>
            <h6 className="teamImgH6">Executive Editor</h6>
          </Item>
          <Item>
            {" "}
            <i class="fa fa-plus-circle addIcon"></i>
            <img
              src="/assets/images/client.webp"
              alt="Logo"
              width="150"
              height="150"
              class="d-inline-block align-text-top teamImg"
            />
            <h3 className="teamImgH3">Namrata K</h3>
            <h6 className="teamImgH6">Process Prodigy</h6>
          </Item>
          <Item>
            {" "}
            <i class="fa fa-plus-circle addIcon"></i>
            <img
              src="/assets/images/client.webp"
              alt="Logo"
              width="150"
              height="150"
              class="d-inline-block align-text-top teamImg"
            />
            <h3 className="teamImgH3">Shreya R</h3>
            <h6 className="teamImgH6">Content Architect</h6>
          </Item>
          <Item>
            {" "}
            <i class="fa fa-plus-circle addIcon"></i>
            <img
              src="/assets/images/client.webp"
              alt="Logo"
              width="150"
              height="150"
              class="d-inline-block align-text-top teamImg"
            />
            <h3 className="teamImgH3">Poulami G</h3>
            <h6 className="teamImgH6">Content Architect</h6>
          </Item>
          <Item>
            {" "}
            <i class="fa fa-plus-circle addIcon"></i>
            <img
              src="/assets/images/client.webp"
              alt="Logo"
              width="150"
              height="150"
              class="d-inline-block align-text-top teamImg"
            />
            <h3 className="teamImgH3">Harsh K</h3>
            <h6 className="teamImgH6">Pixel Picasso</h6>
          </Item>
        </Carousel>

        <div className="teamCardDiv">
          <div className="teamCardDesktop teamReveals">
            <i class="fa fa-plus-circle addIcon" width="80px" height="80px"></i>

            <div className="imageCard">
              <img
                src="/assets/images/client.webp"
                alt="Logo"
                width="100"
                height="100"
                class="d-inline-block align-text-top teamImg"
              />
              <h3 className="teamImgH3">Suhas M</h3>
              <h6 className="teamImgH6">Chief Storyteller</h6>
            </div>
          </div>
          <div className="teamCardDesktop teamReveals">
            <i class="fa fa-plus-circle addIcon"></i>

            <div className="imageCard">
              <img
                src="/assets/images/client.webp"
                alt="Logo"
                width="100"
                height="100"
                class="d-inline-block align-text-top teamImg"
              />
              <h3 className="teamImgH3">Rammona M</h3>
              <h6 className="teamImgH6">Executive Editor</h6>
            </div>
          </div>
          <div className="teamCardDesktop teamReveals">
            <i class="fa fa-plus-circle addIcon"></i>

            <div className="imageCard">
              <img
                src="/assets/images/client.webp"
                alt="Logo"
                width="100"
                height="100"
                class="d-inline-block align-text-top teamImg"
              />
              <h3 className="teamImgH3">Namrata K</h3>
              <h6 className="teamImgH6">Process Prodigy</h6>
            </div>
          </div>
          <div className="teamCardDesktop teamReveals">
            <i class="fa fa-plus-circle addIcon"></i>

            <div className="imageCard">
              <img
                src="/assets/images/client.webp"
                alt="Logo"
                width="100"
                height="100"
                class="d-inline-block align-text-top teamImg"
              />
              <h3 className="teamImgH3">Shreya R</h3>
              <h6 className="teamImgH6">Content Architect</h6>
            </div>
          </div>
          <div className="teamCardDesktop teamReveals">
            <i class="fa fa-plus-circle addIcon"></i>

            <div className="imageCard">
              <img
                src="/assets/images/client.webp"
                alt="Logo"
                width="100"
                height="100"
                class="d-inline-block align-text-top teamImg"
              />
              <h3 className="teamImgH3">Poulami G</h3>
              <h6 className="teamImgH6">Content Architect</h6>
            </div>
          </div>
          <div className="teamCardDesktop teamReveals">
            <i class="fa fa-plus-circle addIcon"></i>
            <div className="imageCard">
              <img
                src="/assets/images/client.webp"
                alt="Logo"
                width="100"
                height="100"
                class="d-inline-block align-text-top teamImg"
              />
              <h3 className="teamImgH3">Harsh K</h3>
              <h6 className="teamImgH6">Pixel Picasso</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
