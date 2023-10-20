import React from "react";
import "./Experience.css";
import Experience1 from "./Experience1";

const Exprience = () => {
  return (
    <>
      <div style={{ border: "1px solid black", height: "100%" }}>
        <div className="fluid-container mb-5">
          {/* <div
            className="row scrolling-text-container"
            style={{ width: "100%" }}
          >
            <div
              className="col-12 scrolling-text"
              style={{ textAlign: "center" }}
            >
              <h1 style={{ fontSize: "110px", fontWeight: "900" }}>
                Exper<span style={{ color: "gray" }}>ience</span> Exper
                <span style={{ color: "gray" }}>ience</span>
              </h1>
            </div>
          </div> */}
          <div className="row airplaneContainer02" style={{ width: "100%" }}>
            <div className="col-12 airplane02" style={{ textAlign: "center" }}>
              <h1
                style={{
                  fontSize: "12vw",
                  fontWeight: "900",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                Exper<span style={{ color: "gray" }}>ience&nbsp;</span>
                Exper
                <span style={{ color: "gray" }}>ience</span>
              </h1>
            </div>
          </div>
          <hr style={{ border: "1px solid black" }} />
          <hr style={{ border: "1px solid black", marginTop: "-18px" }} />
          <div
            className="row d-flex justify-content-center"
            style={{
              width: "90%",
              marginTop: "90px",
              alignItems: "center",
            }}
          >
            <div className="col-md d-flex   justify-content-center  ">
              <img
                src="/assets/images/experience.gif"
                alt="Contact Us"
                height="300px"
                width="400px"
              />
            </div>
            <div
              class="card text-white bg-primary mb-3"
              style={{ borderRadius: "20px" }}
            >
              <div class="card-body" style={{ padding: "5% 5%" }}>
                <h5 class="card-title">
                  16 years of experience in design, between agencies, startups
                  and big corporations. <br />
                  <br />
                </h5>
                <p class="card-text">
                  I don't just push pixels: design strategy, vision and
                  forward-thinking are some of my most appreciated skills.{" "}
                  <br />
                  <br />I have experience on a variety of digital products, with
                  awards winning titles in my portfolio. I lead remote design
                  teams, distributed across different time zones, using an
                  approach made of mentoring, coaching and leading by example..
                </p>
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
