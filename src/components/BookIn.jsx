import React from "react";
import "./BookIn.css";
import { useState, useEffect } from "react";
import BestSellers from "./BestSellers";
import NewArrival from "./NewArrival";
// import FeaturesAuthors from "./FeaturesAuthors";
// import AwardWinning from "./AwardWinning";
import { Link } from "react-router-dom";

const BookIn = () => {
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
      // Cleanup event listeners when the component unmounts
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [tabTitle]);

  const sendButton = () => {
    alert("Can't call any page at present");
  };
  return (
    <>
      <div
        style={{
          // height: "900px",
          width: "100%",
          border: "2px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0",
          background:
            "linear-gradient(135deg, #d5fc39, #fff, #fff, #fff, #fff, #fff, #fff, #d5fc39)",
        }}
        className="inbookTop"
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
          className="inbookPage hidden"
        >
          <div className="row ">
            <div
              class="text-white mb-3 inbookPageDiv"
              style={{
                width: "55%",
                marginRight: "20px",
                padding: "0px 25px 0px 50px ",
              }}
            >
              <div class="card-body text-black">
                <h1
                  class="card-title inbookPageHeading"
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
                  class="card-title inbookPageSmallHeading"
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
                  class="card-text inbookPageParagraph"
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                  }}
                >
                  This is one section you don't want to miss—explore our
                  collection of captivating realities that fuel your curiosity
                  and broaden your knowledge horizons. Get inspired! <br />
                  <br />
                </p>
                <div style={{}} className="inbookPageButton">
                  <button
                    type="button"
                    class="btn btn-outline-dark inbookPageButtonOneClick"
                    // onClick={sendButton}
                  >
                    <h4
                      style={{ padding: "5px 30px 0px 30px" }}
                      className="inbookPageButtonOne"
                    >
                      <Link to="/books/bookin" className="inbooklink">
                        BUY NOW
                      </Link>
                    </h4>
                  </button>
                </div>
                <br />
                <br />
              </div>
            </div>

            <div className="col-md 5 d-flex justify-content-center">
              <div className="innewBookBox">
                <h1 className="innewBookBoxText">
                  <span className="innewBookBoxTextSpan">New Launch</span>
                  <br />
                  {title1}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BestSellers />
      <NewArrival />
      {/* <FeaturesAuthors /> */}
      {/* <AwardWinning /> */}
    </>
  );
};

export default BookIn;
