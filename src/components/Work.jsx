import React from "react";
import "./work.css";
import { useState, useEffect } from "react";

const Work = () => {
  const reveal = () => {
    const reveals = document.querySelectorAll(".reveals");
    const revealpoint = 100; // You can adjust this value based on your requirements

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

  const [tabTitle, setTabTitle] = useState(
    `${(document.title =
      "Work | Brands Out Loud: Forefront For Everything Business")}`
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
    window.addEventListener("scroll", reveal);

    return () => {
      // Cleanup event listeners when the component unmounts
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("scroll", reveal);
    };
  }, [tabTitle]);

  return (
    <>
      <section>
        <div className="scroll text1 reveals">
          <div>
            #Editor’s Choice <span>#Editor’s Choice</span> #Editor’s Choice{" "}
            <span>#Editor’s Choice</span>
          </div>
          <div>
            #Editor’s Choice <span>#Editor’s Choice</span> #Editor’s Choice{" "}
            <span>#Editor’s Choice</span>
          </div>
          {/* <div>
            work <span className="text-wrapper-stoke">work</span> work{" "}
            <span className="text-wrapper-stoke">work</span>
          </div> */}
        </div>
      </section>
      <div
        style={{
          height: "auto",
          width: "100%",
          border: "2px solid #0d0d0d",
          background: "#0d0d0d",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "100px 0 0 0",
        }}
        className="workPage"
      >
        <div
          class="workPageDiv reveals"
          style={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            background: "#0d0d0d",
            color: "#fff",
            borderColor: "#fff",
            borderRadius: "35px",
          }}
        >
          <div
            class="card-body workPageDivBox "
            style={{ width: "100%", margin: "0px 0px", padding: "2%" }}
          >
            <h5 class="card-title">
              Turn your story’s volume up to eleven. Brands Out Loud is where
              your stories get a standing ovation!
            </h5>
          </div>
          <div
            style={{ padding: "1%", width: "18%" }}
            className="workPageDivButton001"
          >
            <button
              type="button"
              class="btn btn-success workPageDivButton"
              style={{ borderRadius: "35px" }}
            >
              Share your story
            </button>
          </div>
        </div>

        <div
          class="card-columns"
          style={{
            display: "flex",
            width: "85%",
            flexFlow: "wrap",
            // justifyContent: "space-between",
            justifyContent: "space-evenly",
            // justifyContent: "space-around",
            margin: "50px 0",
            borderRadius: "35px",
          }}
        >
          <div class="cardGroup reveals">
            <img
              class="card card-img-top "
              src="/assets/images/work01.png"
              alt="Contact Us"
              style={{
                margin: "20px 10px",
                borderRadius: "35px",
                height: "300px",
                width: "400px",
              }}
            />
          </div>
          <div class="cardGroup reveals">
            <img
              class="card card-img-top"
              src="/assets/images/work02.png"
              alt="Contact Us"
              style={{
                margin: "20px 10px",

                borderRadius: "35px",
                height: "300px",
                width: "400px",
              }}
            />
          </div>
          <div class="cardGroup reveals">
            <img
              class="card card-img-top"
              src="/assets/images/work03.png"
              alt="Contact Us"
              style={{
                margin: "20px 10px",

                borderRadius: "35px",
                height: "300px",
                width: "400px",
              }}
            />
          </div>
          <div class="cardGroup reveals">
            <img
              class="card card-img-top"
              src="/assets/images/work04.png"
              alt="Contact Us"
              style={{
                margin: "20px 10px",

                borderRadius: "35px",
                height: "300px",
                width: "400px",
              }}
            />
          </div>
          <div class="cardGroup reveals">
            <img
              class="card card-img-top"
              src="/assets/images/work05.png"
              alt="Contact Us"
              style={{
                margin: "20px 10px",

                borderRadius: "35px",
                height: "300px",
                width: "400px",
              }}
            />
          </div>
          <div class="cardGroup reveals">
            <img
              class="card card-img-top"
              src="/assets/images/work01.png"
              alt="Contact Us"
              style={{
                margin: "20px 10px",
                borderRadius: "35px",
                height: "300px",
                width: "400px",
              }}
            />
          </div>

          <div>
            <br />
            <br />
            <br />
            <h5
              style={{ textAlign: "center", color: "white" }}
              className="reveals"
            >
              The Power of Multiples— Partner for Visibility, Growth, and
              Success
            </h5>
            <div
              class="card-columns workPageDivIcon reveals"
              style={{
                display: "flex",
                width: "100%",
                flexFlow: "wrap",
                justifyContent: "center",
                margin: "50px 0 0 0",
              }}
            >
              <div class="workPageDivIconImg">
                <img
                  class="card-img-top-icon workPageDivIconImgDone IconImg01"
                  src="/assets/images/WLogo01.webp"
                  alt="Contact Us"
                  height="60px"
                  width="120px"
                  style={{
                    margin: "20px 25px",
                  }}
                />
              </div>

              <div class="workPageDivIconImg">
                <img
                  class="card-img-top-icon workPageDivIconImgDone IconImg02"
                  src="/assets/images/WLogo02.webp"
                  alt="Contact Us"
                  height="60px"
                  width="120px"
                  style={{
                    margin: "20px 25px",
                  }}
                />
              </div>

              <div class="workPageDivIconImg">
                <img
                  class="card-img-top-icon workPageDivIconImgDone IconImg03"
                  src="/assets/images/WLogo03.png"
                  alt="Contact Us"
                  height="60px"
                  width="120px"
                  style={{
                    margin: "20px 25px",
                  }}
                />
              </div>

              <div class="workPageDivIconImg">
                <img
                  class="card-img-top-icon workPageDivIconImgDone IconImg04"
                  src="/assets/images/WLogo04.png"
                  alt="Contact Us"
                  height="60px"
                  width="120px"
                  style={{
                    margin: "20px 25px",
                  }}
                />
              </div>

              <div class="workPageDivIconImg">
                <img
                  class="card-img-top-icon workPageDivIconImgDone IconImg05"
                  src="/assets/images/WLogo05.png"
                  alt="Contact Us"
                  height="60px"
                  width="120px"
                  style={{
                    margin: "20px 25px",
                  }}
                />
              </div>

              <div class="workPageDivIconImg">
                <img
                  class="card-img-top-icon workPageDivIconImgDone IconImg06"
                  src="/assets/images/WLogo06.webp"
                  alt="Contact Us"
                  height="60px"
                  width="120px"
                  style={{
                    margin: "20px 25px",
                  }}
                />
              </div>

              <div class="workPageDivIconImg">
                <img
                  class="card-img-top-icon workPageDivIconImgDone IconImg07"
                  src="/assets/images/WLogo07.png"
                  alt="Contact Us"
                  height="60px"
                  width="120px"
                  style={{
                    margin: "20px 25px",
                  }}
                />
              </div>

              <div class="workPageDivIconImg">
                <img
                  class="card-img-top-icon workPageDivIconImgDone IconImg08"
                  src="/assets/images/WLogo08.svg"
                  alt="Contact Us"
                  height="60px"
                  width="120px"
                  style={{
                    margin: "20px 25px",
                  }}
                />
              </div>

              <div class="workPageDivIconImg">
                <img
                  class="card-img-top-icon workPageDivIconImgDone IconImg09"
                  src="/assets/images/WLogo09.png"
                  alt="Contact Us"
                  height="60px"
                  width="120px"
                  style={{
                    margin: "20px 25px",
                  }}
                />
              </div>

              <div class="workPageDivIconImg">
                <img
                  class="card-img-top-icon workPageDivIconImgDone IconImg10"
                  src="/assets/images/WLogo10.png"
                  alt="Contact Us"
                  height="60px"
                  width="120px"
                  style={{
                    margin: "20px 25px",
                  }}
                />
              </div>

              <div class="workPageDivIconImg">
                <img
                  class="card-img-top-icon workPageDivIconImgDone IconImg11"
                  src="/assets/images/WLogo11.png"
                  alt="Contact Us"
                  height="60px"
                  width="120px"
                  style={{
                    margin: "20px 25px",
                  }}
                />
              </div>

              <div class="workPageDivIconImg">
                <img
                  class="card-img-top-icon workPageDivIconImgDone IconImg12"
                  src="/assets/images/WLogo12.png"
                  alt="Contact Us"
                  height="60px"
                  width="120px"
                  style={{
                    margin: "20px 25px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
