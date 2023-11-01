import React from "react";
import "./work.css";

const Work = () => {
  return (
    <>
      <section>
        <div className="scroll text1">
          <div>
            work <span>work</span> work <span>work</span>
          </div>
          <div>
            work <span>work</span> work <span>work</span>
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
          class="workPageDiv"
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
            class="card-body workPageDivBox"
            style={{ width: "100%", margin: "0px 0px", padding: "2%" }}
          >
            <h5 class="card-title">
              Turn your story’s volume up to eleven. Brands Out Loud is where
              your stories get a standing ovation!
            </h5>
          </div>
          <div style={{ padding: "1%" }}>
            <button
              type="button"
              class="btn btn-success"
              style={{ borderRadius: "35px" }}
            >
              <h4 style={{ padding: "1% 5px" }} className="workPageDivButton">
                GIVE US A SHOUT
              </h4>
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
          <div class="cardGroup">
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
          <div class="cardGroup">
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
          <div class="cardGroup">
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
          <div class="cardGroup">
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
          <div class="cardGroup">
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

          <div>
            <br />
            <br />
            <br />
            <h5 style={{ textAlign: "center", color: "white" }}>
              The Power of Multiples— Partner for Visibility, Growth, and
              Success
            </h5>
            <div
              class="card-columns workPageDivIcon"
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
                  class="card-img-top-icon workPageDivIconImgDone"
                  src="/assets/images/logo01.svg"
                  alt="Contact Us"
                  height="100px"
                  width="173px"
                  style={{
                    margin: "20px 0px",
                  }}
                />
              </div>

              <div class="">
                <img
                  class="card-img-top-icon workPageDivIconImgDone"
                  src="/assets/images/logo02.svg"
                  alt="Contact Us"
                  height="100px"
                  width="173px"
                  style={{
                    margin: "20px 0px",
                  }}
                />
              </div>

              <div class="">
                <img
                  class="card-img-top-icon workPageDivIconImgDone"
                  src="/assets/images/logo03.svg"
                  alt="Contact Us"
                  height="100px"
                  width="173px"
                  style={{
                    margin: "20px 0px",
                  }}
                />
              </div>

              <div class="">
                <img
                  class="card-img-top-icon workPageDivIconImgDone"
                  src="/assets/images/logo04.svg"
                  alt="Contact Us"
                  height="100px"
                  width="173px"
                  style={{
                    margin: "20px 0px",
                  }}
                />
              </div>

              <div class="">
                <img
                  class="card-img-top-icon workPageDivIconImgDone"
                  src="/assets/images/logo05.svg"
                  alt="Contact Us"
                  height="100px"
                  width="173px"
                  style={{
                    margin: "20px 0px",
                  }}
                />
              </div>

              <div class="">
                <img
                  class="card-img-top-icon workPageDivIconImgDone"
                  src="/assets/images/logo06.svg"
                  alt="Contact Us"
                  height="100px"
                  width="173px"
                  style={{
                    margin: "20px 0px",
                  }}
                />
              </div>

              <div class="">
                <img
                  class="card-img-top-icon workPageDivIconImgDone"
                  src="/assets/images/logo07.svg"
                  alt="Contact Us"
                  height="100px"
                  width="173px"
                  style={{
                    margin: "20px 0px",
                  }}
                />
              </div>

              <div class="">
                <img
                  class="card-img-top-icon workPageDivIconImgDone"
                  src="/assets/images/logo08.svg"
                  alt="Contact Us"
                  height="100px"
                  width="173px"
                  style={{
                    margin: "20px 0px",
                  }}
                />
              </div>

              <div class="">
                <img
                  class="card-img-top-icon workPageDivIconImgDone"
                  src="/assets/images/logo09.svg"
                  alt="Contact Us"
                  height="100px"
                  width="173px"
                  style={{
                    margin: "20px 0px",
                  }}
                />
              </div>

              <div class="">
                <img
                  class="card-img-top-icon workPageDivIconImgDone"
                  src="/assets/images/logo10.svg"
                  alt="Contact Us"
                  height="100px"
                  width="173px"
                  style={{
                    margin: "20px 0px",
                  }}
                />
              </div>

              <div class="">
                <img
                  class="card-img-top-icon workPageDivIconImgDone"
                  src="/assets/images/logo11.svg"
                  alt="Contact Us"
                  height="100px"
                  width="173px"
                  style={{
                    margin: "20px 0px",
                  }}
                />
              </div>

              <div class="">
                <img
                  class="card-img-top-icon workPageDivIconImgDone"
                  src="/assets/images/logo12.svg"
                  alt="Contact Us"
                  height="100px"
                  width="173px"
                  style={{
                    margin: "20px 0px",
                  }}
                />
              </div>

              <div class="">
                <img
                  class="card-img-top-icon workPageDivIconImgDone"
                  src="/assets/images/logo13.svg"
                  alt="Contact Us"
                  height="100px"
                  width="173px"
                  style={{
                    margin: "20px 0px",
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
