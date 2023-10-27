import React from "react";
import "./Experience.css";
import Experience1 from "./Experience1";

const Exprience = () => {
  return (
    <>
      <div style={{ border: "1px solid black", height: "100%" }}>
        <div className="fluid-container experienceSlider">
          {/* <div className="row airplaneContainer02" style={{ width: "100%" }}>
            <div className="col-12 airplane02" style={{ textAlign: "center" }}>
              <h1
                style={{
                  fontSize: "8vw",
                  fontWeight: "900",
                  display: "flex",
                  margin: "auto",
                  flexDirection: "row",
                }}
                className="experienceH1Tag"
                data-text="Experience"
              >
                STARTUPS&nbsp;
                <h1 className="experienceH1InnerTag">PEOPLE&nbsp;</h1>
                INNOVATION&nbsp;
                <h1 className="experienceH1InnerTag">CURIOSITY</h1>
              </h1>
            </div>
          </div> */}
          <div className="text-wrapper">
            <h1>
              Startups <span className="text-wrapper-stoke">| People</span> |
              Innovation <span className="text-wrapper-stoke">| Curiosity</span>
            </h1>
            <h1>
              Startups <span className="text-wrapper-stoke">| People</span> |
              Innovation <span className="text-wrapper-stoke">| Curiosity</span>
            </h1>
          </div>

          <hr style={{ border: "1px solid black" }} />
          <hr style={{ border: "1px solid black", marginTop: "-18px" }} />
          <div
            className="row d-flex justify-content-center experienceDiv"
            style={{
              width: "80%",
              marginTop: "90px",
              alignItems: "center",
            }}
          >
            <div className="col-md d-flex justify-content-center">
              <img
                src="/assets/images/experience.gif"
                alt="Contact Us"
                height="300px"
                width="400px"
                className="experienceImg"
              />
            </div>
            <div className="c">
              <div className="speechb">
                <div class="card-body" style={{ padding: "5% 5%" }}>
                  <h5 class="card-title">
                    A team of designers, writers, and creators connecting
                    brilliant minds. <br />
                    <br />
                  </h5>
                  <p class="card-text">
                    We ignite stories, celebrate entrepreneurship, and thrive on
                    the sparks of imagination. From startups to trailblazers,
                    we're the cosmic cheerleaders propelling dreams to galaxies
                    of success. <br />
                    <br />
                    We craft a confetti-filled carnival where every brand can
                    unmute their imagination and creativity, every
                    entrepreneur's journey and success is shared and celebrated,
                    and innovation takes centerstage fueled by curiosity and
                    collective brilliance.
                    <br />
                    <br />
                    We are Brands Out Loud—where stories, collaboration, and
                    innovation merge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Experience1 />
    </>
  );
};

export default Exprience;
