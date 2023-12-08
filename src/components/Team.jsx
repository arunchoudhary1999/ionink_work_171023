import React, { useEffect } from "react";
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
      <div className="App teamReveals">
        <div className="teamText">
          <h1 className="teamTextH1" style={{ textAlign: "center" }}>
            Meet The Team
          </h1>
        </div>
        {/* <Carousel breakPoints={breakPoints} className="teamReveals">
          <div className="autoSliderDiv">
            <Item className="outSlideCard">
              <div className="inSlideCard">
                <img
                  src="/assets/images/client.webp"
                  alt="Logo"
                  width="150"
                  height="150"
                  class="d-inline-block align-text-top teamImg"
                />
                <h3 className="teamImgH3">Suhas M</h3>
                <h6 className="teamImgH6">Chief Storyteller</h6>
              </div>
            </Item>
            <Item className="outSlideCard">
              <div className="inSlideCard">
                <img
                  src="/assets/images/client.webp"
                  alt="Logo"
                  width="150"
                  height="150"
                  class="d-inline-block align-text-top teamImg"
                />
                <h3 className="teamImgH3">Rammona M</h3>
                <h6 className="teamImgH6">Executive Editor</h6>
              </div>
            </Item>
            <Item className="outSlideCard">
              <div className="inSlideCard">
                <img
                  src="/assets/images/client.webp"
                  alt="Logo"
                  width="150"
                  height="150"
                  class="d-inline-block align-text-top teamImg"
                />
                <h3 className="teamImgH3">Namrata K</h3>
                <h6 className="teamImgH6">Process Prodigy</h6>
              </div>
            </Item>
            <Item className="outSlideCard">
              <div className="inSlideCard">
                <img
                  src="/assets/images/client.webp"
                  alt="Logo"
                  width="150"
                  height="150"
                  class="d-inline-block align-text-top teamImg"
                />
                <h3 className="teamImgH3">Shreya R</h3>
                <h6 className="teamImgH6">Content Architect</h6>
              </div>
            </Item>
            <Item className="outSlideCard">
              <div className="inSlideCard">
                <img
                  src="/assets/images/client.webp"
                  alt="Logo"
                  width="150"
                  height="150"
                  class="d-inline-block align-text-top teamImg"
                />
                <h3 className="teamImgH3">Poulami G</h3>
                <h6 className="teamImgH6">Content Architect</h6>
              </div>
            </Item>
            <Item className="outSlideCard">
              <div className="inSlideCard">
                <img
                  src="/assets/images/client.webp"
                  alt="Logo"
                  width="150"
                  height="150"
                  class="d-inline-block align-text-top teamImg"
                />
                <h3 className="teamImgH3">Harsh K</h3>
                <h6 className="teamImgH6">Pixel Picasso</h6>
              </div>
            </Item>
          </div>
        </Carousel> */}

        <div className="team-container">
          <div className="container in-container">
            <div className="slide-container">
              <Item className="slide-image">
                <div className="inSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top teamImg"
                  />
                  <h3 className="teamImgH3">Suhas M</h3>
                  <h6 className="teamImgH6">Chief Storyteller</h6>
                </div>
              </Item>
              <Item className="slide-image">
                <div className="inSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top teamImg"
                  />
                  <h3 className="teamImgH3">Rammona M</h3>
                  <h6 className="teamImgH6">Executive Editor</h6>
                </div>
              </Item>
              <Item className="slide-image">
                <div className="inSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top teamImg"
                  />
                  <h3 className="teamImgH3">Namrata K</h3>
                  <h6 className="teamImgH6">Process Prodigy</h6>
                </div>
              </Item>
              <Item className="slide-image">
                <div className="inSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top teamImg"
                  />
                  <h3 className="teamImgH3">Shreya R</h3>
                  <h6 className="teamImgH6">Content Architect</h6>
                </div>
              </Item>
              <Item className="slide-image">
                <div className="inSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top teamImg"
                  />
                  <h3 className="teamImgH3">Poulami G</h3>
                  <h6 className="teamImgH6">Content Architect</h6>
                </div>
              </Item>
              <Item className="slide-image">
                <div className="inSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top teamImg"
                  />
                  <h3 className="teamImgH3">Harsh K</h3>
                  <h6 className="teamImgH6">Pixel Picasso</h6>
                </div>
              </Item>
              <Item className="slide-image">
                <div className="inSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top teamImg"
                  />
                  <h3 className="teamImgH3">Suhas M</h3>
                  <h6 className="teamImgH6">Chief Storyteller</h6>
                </div>
              </Item>
              <Item className="slide-image">
                <div className="inSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top teamImg"
                  />
                  <h3 className="teamImgH3">Rammona M</h3>
                  <h6 className="teamImgH6">Executive Editor</h6>
                </div>
              </Item>
              <Item className="slide-image">
                <div className="inSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top teamImg"
                  />
                  <h3 className="teamImgH3">Namrata K</h3>
                  <h6 className="teamImgH6">Process Prodigy</h6>
                </div>
              </Item>
              <Item className="slide-image">
                <div className="inSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top teamImg"
                  />
                  <h3 className="teamImgH3">Shreya R</h3>
                  <h6 className="teamImgH6">Content Architect</h6>
                </div>
              </Item>
              <Item className="slide-image">
                <div className="inSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top teamImg"
                  />
                  <h3 className="teamImgH3">Poulami G</h3>
                  <h6 className="teamImgH6">Content Architect</h6>
                </div>
              </Item>
              <Item className="slide-image">
                <div className="inSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top teamImg"
                  />
                  <h3 className="teamImgH3">Harsh K</h3>
                  <h6 className="teamImgH6">Pixel Picasso</h6>
                </div>
              </Item>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="secondteam-container">
          <div className="container secondin-container">
            <div className="secondslide-container">
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top secondteamImg"
                  />
                  <h3 className="secondteamImgH3">Suhas M</h3>
                  <h6 className="secondteamImgH6">Chief Storyteller</h6>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top secondteamImg"
                  />
                  <h3 className="secondteamImgH3">Rammona M</h3>
                  <h6 className="secondteamImgH6">Executive Editor</h6>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top secondteamImg"
                  />
                  <h3 className="secondteamImgH3">Namrata K</h3>
                  <h6 className="secondteamImgH6">Process Prodigy</h6>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top secondteamImg"
                  />
                  <h3 className="secondteamImgH3">Shreya R</h3>
                  <h6 className="secondteamImgH6">Content Architect</h6>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top secondteamImg"
                  />
                  <h3 className="secondteamImgH3">Poulami G</h3>
                  <h6 className="secondteamImgH6">Content Architect</h6>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top secondteamImg"
                  />
                  <h3 className="secondteamImgH3">Harsh K</h3>
                  <h6 className="secondteamImgH6">Pixel Picasso</h6>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top secondteamImg"
                  />
                  <h3 className="secondteamImgH3">Suhas M</h3>
                  <h6 className="secondteamImgH6">Chief Storyteller</h6>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top secondteamImg"
                  />
                  <h3 className="secondteamImgH3">Rammona M</h3>
                  <h6 className="secondteamImgH6">Executive Editor</h6>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top secondteamImg"
                  />
                  <h3 className="secondteamImgH3">Namrata K</h3>
                  <h6 className="secondteamImgH6">Process Prodigy</h6>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top secondteamImg"
                  />
                  <h3 className="secondteamImgH3">Shreya R</h3>
                  <h6 className="secondteamImgH6">Content Architect</h6>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top secondteamImg"
                  />
                  <h3 className="secondteamImgH3">Poulami G</h3>
                  <h6 className="secondteamImgH6">Content Architect</h6>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <img
                    src="/assets/images/client.webp"
                    alt="Logo"
                    width="150"
                    height="150"
                    class="d-inline-block align-text-top secondteamImg"
                  />
                  <h3 className="secondteamImgH3">Harsh K</h3>
                  <h6 className="secondteamImgH6">Pixel Picasso</h6>
                </div>
              </Item>
            </div>
          </div>
        </div>

        {/* <div className="teamCardDiv">
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
        </div> */}
      </div>
    </div>
  );
};

export default Team;
