import React from "react";
import "./Book.css";

const Book = () => {
  return (
    <div
      style={{
        // height: "900px",
        width: "100%",
        border: "1px solid black",
        background: "#ffcb46",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 0",
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
        }}
        className="bookPage"
      >
        <div className="row ">
          <div className="col-md 5 d-flex justify-content-center">
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
                  fontSize: "95px",
                  fontWeight: "900",
                  letterSpacing: "2px",
                }}
              >
                BOOk
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
                Learn how to design successful digital products for kids!
                <br />
                <br />
              </h3>
              <p
                class="card-text bookPageParagraph"
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                All the secrets to design successful digital products for
                children. You'll find answers to all your questions regarding
                the industry, and its peculiarities in UX design, UI design,
                user testing, business strategies and much more. <br />
                <br />
                <ul
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  <li>
                    250+ pages of best practices, tips, guidelines and
                    information, based on scientific studies and decades of
                    experience.
                  </li>
                  <br />
                  <li>
                    Interviews with industry experts, including people from
                    Netflix, PBS Kids, Toca Boca, and more.
                  </li>
                  <br />
                  <li>
                    Usability and accessibility information that will make you a
                    better, more inclusive designer on any kind of product, not
                    just for kids
                    <br />
                    <br />
                  </li>
                </ul>
              </p>
              <div
                style={{ display: "flex", justifyContent: "space-evenly" }}
                className="bookPageButton"
              >
                <button type="button" class="btn btn-outline-dark ">
                  <h4
                    style={{ padding: "5px 30px 0px 30px" }}
                    className="bookPageButtonOne"
                  >
                    LEARN MORE
                  </h4>
                </button>
                <button type="button" class="btn btn-success">
                  <h4
                    style={{ padding: "5px 30px 0px 30px" }}
                    className="bookPageButtonTwo"
                  >
                    BUY NOW
                  </h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
