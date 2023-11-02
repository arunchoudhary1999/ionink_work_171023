import React, { useState, useEffect } from "react";
import "./Home.css";
import Book from "./Book";
import Experience from "./Experience";
import Awards from "./Awards";
import Work from "./Work";
import Contact from "./Contact";
import Magzines from "./Magzines";

const Home = () => {
  const [tabTitle, setTabTitle] = useState(
    `${(document.title = "Home | BOL")}`
  );
  useEffect(() => {
    // document.title = "Home | BOL";
    const text = document.querySelector(".text p");

    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform: rotate(${i * 5.7}deg)" >${char}</span>`
      )
      .join("");

    const handleBlur = () => {
      document.title = "😞 Missing you already";
    };

    const handleFocus = () => {
      document.title = tabTitle;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      // Cleanup event listeners when the component unmounts
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, [tabTitle]);

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
            style={{
              height: "100%",
              width: "100%",
              // background: "rgb(135,206,250)",
              background: "linear-Gradient(#72eca5, #54b8d8)",
            }}
          >
            <div
              style={{ width: "90%", float: "right" }}
              className="homePageText"
            >
              <div
                style={{
                  marginTop: "-50px",
                }}
              >
                <h1
                  style={{
                    marginTop: "8vh",
                    fontSize: "18vw",
                    fontWeight: "900",
                    letterSpacing: "1vw",
                    // color: "white",
                    color: "linear-Gradient(#72eca5, #54b8d8)",
                  }}
                  data-text="BOL"
                  className="homeBolText homeBolH1"
                >
                  <span className="textGradient">B</span>
                  <span className="textGradientC">O</span>
                  <span className="textGradient">L!</span>
                </h1>
              </div>
              <div
                className="rotate-scroll"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "end",
                }}
              >
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
                        fontSize: "6.2vw",
                        fontWeight: "600",
                        letterSpacing: "0.1vw",
                        lineHeight: "8vw",
                      }}
                    >
                      Step into the cosmos of <br /> Brands Out Loud
                    </h1>
                  </div>
                  <div>
                    <h1
                      style={{ fontWeight: "200", fontSize: "2.4vw" }}
                      className="homePageParaParagraph"
                    >
                      Where “extraordinaire” is the way of life.
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
      <Magzines />
    </div>
  );
};

export default Home;
