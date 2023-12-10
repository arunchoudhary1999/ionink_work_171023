import React, { useState, useEffect } from "react";
import "./Home.css";
import Books from "./Books";
import Experience from "./Experience";
import Work from "./Work";
import Contact from "./Contact";
import Team from "./Team";

const Home = () => {
  const [tabTitle, setTabTitle] = useState(
    `${(document.title =
      "Home | Brands Out Loud: Forefront For Everything Business")}`
  );
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback);

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    const handleBlur = () => {
      document.title = "😞 Missing you already";
    };

    const handleFocus = () => {
      document.title = tabTitle;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      hiddenElements.forEach((el) => observer.unobserve(el));
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
              background: "#d5fc39",
              height: "656px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="homePageText">
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
                  className="homePageParaDiv hidden"
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
      <Work />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
