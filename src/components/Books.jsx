import React from "react";
import "./Books.css";
import { useState, useEffect } from "react";

const Books = () => {
  const [title1, setTitle1] = useState("Indian Red Flag");

  const updateOne = () => {
    setTitle1("Indian Red Flag");
  };

  const updateTwo = () => {
    setTitle1("The Burnout");
  };

  const updateThree = () => {
    setTitle1("The Branded C-Suite");
  };

  const updateFour = () => {
    setTitle1("The Science Of A Landing Page");
  };

  const [tabTitle, setTabTitle] = useState(
    `${(document.title =
      "Books | Brands Out Loud: Forefront For Everything Business")}`
  );

  useEffect(() => {
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

  const sendButton = () => {
    alert("Can't call any page at present");
  };
  return (
    <div
      style={{
        // height: "900px",
        width: "100%",
        border: "2px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 0",
      }}
      className="bookTop"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "85%",
          minHeight: "700px",
          borderRadius: "35px",
          padding: "15px",
        }}
        className="bookPage"
      >
        <div className="row ">
          <div className="col-md 5 d-flex justify-content-center">
            <div className="newBookBox">
              <h1 className="newBookBoxText">
                <span className="newBookBoxTextSpan">New Launch</span>
                <br />
                {title1}
              </h1>
            </div>
          </div>
          <div
            class="text-white mb-3 bookPageDiv"
            style={{
              width: "55%",
              marginRight: "20px",
              padding: "0px 25px 0px 50px ",
            }}
          >
            <div class="card-body text-black">
              <h1
                class="card-title bookPageHeading"
                style={{
                  minHeight: "144px",
                  fontSize: "75px",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  lineHeight: "5vw",
                  marginTop: "20px",
                  marginBottom: "25px",
                }}
              >
                Explore our
                <br />
                Literary
                <br />
                Treasure
                <br />
              </h1>
              <h3
                class="card-title bookPageSmallHeading"
                style={{
                  fontSize: "33px",
                  fontWeight: "400",
                  letterSpacing: "2px",
                }}
              >
                Where Facts Inspire, One Page at a Time
                <br />
              </h3>
              <p
                class="card-text bookPageParagraph"
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                This is one section you don't want to miss—explore our
                collection of captivating realities that fuel your curiosity and
                broaden your knowledge horizons. Get inspired! <br />
                <br />
              </p>
              <div style={{}} className="bookPageButton">
                <button
                  type="button"
                  class="btn btn-outline-dark bookPageButtonOneClick"
                  onClick={sendButton}
                >
                  <h4
                    style={{ padding: "5px 30px 0px 30px" }}
                    className="bookPageButtonOne"
                  >
                    LEARN MORE
                  </h4>
                </button>
              </div>
              <br />
              <div className="hrStyle"></div>
              <br />
              <div className="bookCardDiv">
                <div
                  class="card bg-dark text-white bookCardList"
                  onClick={updateOne}
                >
                  <div class="card-img-overlay bookCardTextDiv">
                    <h5 class="card-title bookCardTextDivH5">
                      Indian Red Flag
                    </h5>
                  </div>
                </div>

                <div
                  class="card bg-dark text-white bookCardList"
                  onClick={updateTwo}
                >
                  <div class="card-img-overlay bookCardTextDiv">
                    <h5 class="card-title bookCardTextDivH5">The Burnout</h5>
                  </div>
                </div>

                <div
                  class="card bg-dark text-white bookCardList"
                  onClick={updateThree}
                >
                  <div class="card-img-overlay bookCardTextDiv">
                    <h5 class="card-title bookCardTextDivH5">
                      The Branded C-Suite
                    </h5>
                  </div>
                </div>

                <div
                  class="card bg-dark text-white bookCardList"
                  onClick={updateFour}
                >
                  <div class="card-img-overlay bookCardTextDiv">
                    <h5 class="card-title bookCardTextDivH5">
                      The Science Of A Landing Page
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
