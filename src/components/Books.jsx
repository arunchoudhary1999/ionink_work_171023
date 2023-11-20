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
        flexWrap: "wrap",
        padding: "20px 0",
        background: "#d5fc39",
      }}
      className="bookTop"
    >
      <div
        style={{
          background: "#ff81cc",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "85%",
          minHeight: "700px",
          border: "2px solid black",
          borderRadius: "35px",
          padding: "15px",
          marginBottom: "20px",
        }}
        className="bookPage"
      >
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center bookImageResponse">
            <img
              src="/assets/images/book.png"
              alt="Contact Us"
              height="auto"
              width="100%"
              style={{
                borderRadius: "35px",
                border: "1px solid black",
                // margin: "25px 5px 25px 30px ",
              }}
            />
          </div>
          <div
            class="text-white mb-3 bookPageDiv"
            style={{
              width: "55%",
              //   padding: "0",
              marginRight: "20px",
              padding: "0px 25px 0px 50px ",
            }}
          >
            <div class="card-body text-black">
              <h1
                class="card-title bookPageHeading"
                style={{
                  minHeight: "144px",
                  fontSize: "60px",
                  fontWeight: "900",
                  letterSpacing: "2px",
                }}
              >
                Indian Red Flag
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
                Explore our Literary Treasure– Where Facts Inspire, One Page at
                a Time
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
                {/* <ul
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  <li>Indian Red Flag</li>
                  <br />
                  <li>The Burnout</li>
                  <br />
                  <li>The Branded C-Suite</li>
                  <br />

                  <li>
                    The Science Of A Landing Page
                    <br />
                    <br />
                  </li>
                </ul> */}
              </p>
              {/* <div className="bookCardDiv">
                <div
                  class="card bg-dark text-white bookCardList"
                  onClick={updateOne}
                >
                  <img
                    src="/assets/images/book.png"
                    class="card-img"
                    alt="..."
                    className="bookCardSmall"
                  />
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
                  <img
                    src="/assets/images/book.png"
                    class="card-img"
                    alt="..."
                    className="bookCardSmall"
                  />
                  <div class="card-img-overlay bookCardTextDiv">
                    <h5 class="card-title bookCardTextDivH5">The Burnout</h5>
                  </div>
                </div>

                <div
                  class="card bg-dark text-white bookCardList"
                  onClick={updateThree}
                >
                  <img
                    src="/assets/images/book.png"
                    class="card-img"
                    alt="..."
                    className="bookCardSmall"
                  />
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
                  <img
                    src="/assets/images/book.png"
                    class="card-img"
                    alt="..."
                    className="bookCardSmall"
                  />
                  <div class="card-img-overlay bookCardTextDiv">
                    <h5 class="card-title bookCardTextDivH5">
                      The Science Of A Landing Page
                    </h5>
                  </div>
                </div>
              </div> */}
              <div className="bookPageButton">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  onClick={sendButton}
                >
                  <h4
                    style={{ padding: "5px 30px 0px 30px" }}
                    className="bookPageButtonOne"
                  >
                    LEARN MORE
                  </h4>
                </button>
                {/* <button
                  type="button"
                  class="btn btn-success"
                  onClick={sendButton}
                >
                  <h4
                    style={{ padding: "5px 30px 0px 30px" }}
                    className="bookPageButtonTwo"
                  >
                    BUY NOW
                  </h4>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
