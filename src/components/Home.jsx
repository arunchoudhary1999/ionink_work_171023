import React, { useState, useEffect } from "react";
import "./Home.css";
import Books from "./Books";
import Experience from "./Experience";
// import Awards from "./Awards";
import Work from "./Work";
import Contact from "./Contact";
// import Magazine from "./Magazine";
import Team from "./Team";
import Table from "./Table";
// import Blog from "./Blog";

const Home = () => {
  const [tabTitle, setTabTitle] = useState(
    `${(document.title =
      "Home | Brands Out Loud: Forefront For Everything Business")}`
  );
  useEffect(() => {
    // document.title = "Home | BOL";
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
            className="carousel-item active homeResMain"
            style={{
              width: "100%",
              // background: "rgb(135,206,250)",
              // background: "linear-Gradient(#72eca5, #54b8d8)",
              background: "#d5fc39",
              height: "656px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="homePageText">
              {/* <div className="homePageImgDiv">
                <img
                  src="/assets/images/HomePage.gif"
                  alt="Contact Us"
                  className="homePageImg"
                />
              </div> */}
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
                    <h1 className="homePageParaHeading">
                      Step into the cosmos of <br />{" "}
                      <span className="homePageParaHeadingSpan">
                        Brands Out Loud
                      </span>
                    </h1>
                  </div>
                  <div>
                    <h1 className="homePageParaParagraph">
                      Where{" "}
                      <span className="homePageParaParagraphSpan">
                        “extraordinaire”
                      </span>
                      <br />
                      is the way of life.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Experience />
      <Books />
      {/* <Blog /> */}
      {/* <Awards /> */}
      <Work />
      <Team />
      {/* <Magazine /> */}
      <Contact />
      <Table />
    </div>
  );
};

export default Home;
