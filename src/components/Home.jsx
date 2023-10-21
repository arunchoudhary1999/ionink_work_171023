import React, { useEffect } from "react";
import "./Home.css";
import Book from "./Book";
import Experience from "./Experience";
import Awards from "./Awards";
import Work from "./Work";
import Contact from "./Contact";

const Home = () => {
  useEffect(() => {
    const text = document.querySelector(".text p");

    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform: rotate(${i * 5.7}deg)" >${char}</span>`
      )
      .join("");
  }, []);

  return (
    <div>
      <div style={{ border: "2px solid black" }}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        ></div>
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            style={{ height: "100%", width: "100%", background: "#d661ff" }}
          >
            <div
              style={{ width: "90%", float: "right" }}
              className="homePageText"
            >
              <div
                style={{
                  marginTop: "-40px",
                }}
              >
                <h1
                  style={{
                    marginTop: "8vh",
                    fontSize: "18vw",
                    fontWeight: "900",
                    letterSpacing: "1vw",
                    color: "white",
                  }}
                  className="homeBolText"
                >
                  BOL
                </h1>
              </div>
              <div className="rotate-scroll" style={{ display: "flex" }}>
                <div
                  style={{
                    width: "80%",
                  }}
                  className="homePageParaDiv"
                >
                  <div style={{ paddingBottom: "10px" }}>
                    <h1
                      className="homePageParaHeading"
                      style={{
                        fontSize: "10vw",
                        fontWeight: "600",
                        letterSpacing: "1vw",
                        lineHeight: "8vw",
                      }}
                    >
                      I'm Rubens Cantuni
                    </h1>
                  </div>
                  <div>
                    <h1
                      style={{ fontWeight: "200", fontSize: "2.4vw" }}
                      className="homePageParaParagraph"
                    >
                      Award-winning design lead
                    </h1>
                  </div>
                </div>
                <div className="circle">
                  <div className="logo updown-animation"></div>
                  <div className="text">
                    <p>
                      SCROLL*SCROLL*SCROLL*SCROLL*SCROLL*SCROLL*SCROLL*SCROLL*SCROLL*
                    </p>
                  </div>
                </div>
                {/* <button
                  type="button"
                  className="btn"
                  style={{
                    fontSize: "100px",
                    width: "20%",
                  }}
                >
                  <NavLink
                    to="/about"
                    style={{
                      padding: "12px 25px",
                      border: "5px dotted black",
                      borderRadius: "100%",
                    }}
                  >
                    <span
                      class="fa fa-arrow-down"
                      style={{ color: "#000000" }}
                    ></span>
                  </NavLink>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Experience />
      <Book />
      <Awards />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
