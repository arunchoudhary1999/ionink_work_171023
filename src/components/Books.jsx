import React from "react";
import "./Books.css";
import { useState, useEffect } from "react";
import BestSellers from "./BestSellers";
import NewArrival from "./NewArrival";
import FeaturesAuthors from "./FeaturesAuthors";
import AwardWinning from "./AwardWinning";

const Books = () => {
  // const [title1, setTitle1] = useState("Indian Red Flag");

  // const updateOne = () => {
  //   setTitle1("Indian Red Flag");
  // };

  // const updateTwo = () => {
  //   setTitle1("The Burnout");
  // };

  // const updateThree = () => {
  //   setTitle1("The Branded C-Suite");
  // };

  // const updateFour = () => {
  //   setTitle1("The Science Of A Landing Page");
  // };

  const [tabTitle, setTabTitle] = useState(
    `${(document.title =
      "Books | Brands Out Loud: Forefront For Everything Business")}`
  );

  const reveal = () => {
    const reveals = document.querySelectorAll(".bookReveals");
    const revealpoint = 100;

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
    const handleBlur = () => {
      document.title = "😞 Missing you already";
    };

    const handleFocus = () => {
      document.title = tabTitle;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("scroll", reveal);
    };
  }, [tabTitle]);

  const sendButton = () => {
    alert("Can't call any page at present");
  };
  return (
    <>
      <div
        style={{
          border: "2px solid black",
        }}
      >
        <div className="bookPage00">
          <div className="bookPage01">
            <div class="bookPage02">
              <div class="bookPage0201">
                <div class="bookPage020101">
                  <div class="bookPage020101Main00 bookReveals">
                    <h1 class="bookPage020101Main01">
                      Indian Red Flag
                      <br />
                    </h1>
                    <h3 class="bookPage020101Main02">
                      Explore our Literary Treasure– Where Facts Inspire, One
                      Page at a Time
                      <br />
                    </h3>
                    <p class="bookPage020101Main03">
                      This is one section you don't want to miss—explore our
                      collection of captivating realities that fuel your
                      curiosity and broaden your knowledge horizons. Get
                      inspired! <br />
                    </p>
                    <div className="bookPage020101Main04">
                      <button
                        type="button"
                        class="bookPage020101Main0401"
                        onClick={sendButton}
                      >
                        buy now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bookPage0202">
                <div className="bookPage020201">
                  <div className="bookPage020201Main00 bookReveals">
                    <img
                      src="/assets/images/book.png"
                      alt="Contact Us"
                      height="auto"
                      width="100%"
                      className="bookPage020201Main0001"
                    />
                    <div className="bookPage020201Main01">
                      <h3 className="bookPage020201Main0101">new launch</h3>
                      <h1 className="bookPage020201Main0102">
                        indian red flag
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BestSellers />
        <NewArrival />
        <FeaturesAuthors />
        <AwardWinning />
      </div>
    </>
    // <div
    //   style={{
    //     width: "100%",
    //     border: "2px solid black",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     flexWrap: "wrap",
    //     padding: "20px 0",
    //     background: "#d5fc39",
    //   }}
    //   className="bookTop"
    // >
    //   <div
    //     style={{
    //       background: "#ff81cc",
    //       display: "flex",
    //       flexDirection: "column",
    //       justifyContent: "center",
    //       width: "85%",
    //       minHeight: "700px",
    //       border: "2px solid black",
    //       borderRadius: "35px",
    //       padding: "15px",
    //       marginBottom: "20px",
    //     }}
    //     className="bookPage bookReveals"
    //   >
    //     <div className="row">
    //       <div className="col-md 5 d-flex justify-content-center bookImageResponse bookReveals">
    //         <img
    //           src="/assets/images/book.png"
    //           alt="Contact Us"
    //           height="auto"
    //           width="100%"
    //           style={{
    //             borderRadius: "35px",
    //             border: "1px solid black",
    //           }}
    //         />
    //       </div>
    //       <div
    //         class="text-white mb-3 bookPageDiv"
    //         style={{
    //           width: "55%",
    //           marginRight: "20px",
    //           padding: "0px 25px 0px 50px ",
    //         }}
    //       >
    // <div class="card-body text-black bookReveals">
    //   <h1
    //     class="card-title bookPageHeading"
    //     style={{
    //       minHeight: "144px",
    //       fontSize: "60px",
    //       fontWeight: "900",
    //       letterSpacing: "2px",
    //     }}
    //   >
    //     Indian Red Flag
    //     <br />
    //   </h1>
    //   <h3
    //     class="card-title bookPageSmallHeading"
    //     style={{
    //       fontSize: "33px",
    //       fontWeight: "400",
    //       letterSpacing: "2px",
    //     }}
    //   >
    //     Explore our Literary Treasure– Where Facts Inspire, One Page at
    //     a Time
    //     <br />
    //   </h3>
    //   <p
    //     class="card-text bookPageParagraph"
    //     style={{
    //       fontSize: "18px",
    //       fontWeight: "400",
    //     }}
    //   >
    //     This is one section you don't want to miss—explore our
    //     collection of captivating realities that fuel your curiosity and
    //     broaden your knowledge horizons. Get inspired! <br />
    //     <br />
    //   </p>
    //   <div className="bookPageButton">
    //     <button
    //       type="button"
    //       class="btn btn-outline-dark"
    //       onClick={sendButton}
    //     >
    //       <h4
    //         style={{ padding: "5px 30px 0px 30px" }}
    //         className="bookPageButtonOne"
    //       >
    //         LEARN MORE
    //       </h4>
    //     </button>
    //   </div>
    // </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Books;
