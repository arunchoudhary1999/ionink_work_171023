import React from "react";
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
  return (
    <div style={{ border: "2px solid black" }}>
      <div className="App">
        <div className="teamText">
          <h1 style={{ textAlign: "center" }}>Meet The Team Section</h1>
          <h4>
            At Brands Out Loud, we’ve got behind-the-scenes maestros who are 50%
            wizards, 50% mavericks, and 100% super-ready to shout out loud.
          </h4>
        </div>
        <Carousel breakPoints={breakPoints}>
          <Item>
            {" "}
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
      </div>
    </div>
  );
};

export default Team;
