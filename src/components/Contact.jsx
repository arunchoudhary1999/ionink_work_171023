import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div style={{ border: "1px solid black", height: "auto" }}>
      <div className="airplaneContainer">
        <img src="/assets/images/airplane.gif" className="airplane" alt="" />
      </div>
      <div className="airplaneContainer01">
        <img
          src="/assets/images/airplane01.gif"
          className="airplane01"
          alt=""
        />
      </div>
      <div className="fluid-container mb-5">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-12 py-4 my-4" style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "6rem", fontWeight: "900" }}>
              LET'S TALK!
            </h1>
          </div>
        </div>
        <div>
          <div
            className="container mb-5"
            style={{
              width: "50%",
            }}
          >
            <div
              style={{
                padding: "5%",
                border: "1px solid black",
                borderRadius: "15px",
                // height: "400px",
              }}
            >
              <form>
                <div class="">
                  <div class="col">
                    <label for="exampleFormControlTextarea1">Name</label>
                    <input
                      style={{
                        border: "1px solid black",
                        borderRadius: "15px",
                        margin: "10px 0",
                      }}
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="col">
                    <label for="exampleFormControlTextarea1">
                      Email Address
                    </label>
                    <input
                      style={{
                        border: "1px solid black",
                        borderRadius: "15px",
                        margin: "10px 0",
                      }}
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>
              </form>
              <div class="form-group">
                <textarea
                  style={{
                    border: "1px solid black",
                    borderRadius: "15px",
                    margin: "10px 0",
                  }}
                  class="form-control"
                  placeholder="What's up?"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div>
                <button
                  type="button"
                  style={{
                    padding: "1% 1%",
                    border: "1px solid black",
                    borderRadius: "15px",
                    width: "100%",
                    margin: "10px 0",
                  }}
                  class="btn btn-success"
                >
                  <h4
                    style={{
                      // padding: "5px 30px 0px 30px",
                    }}
                  >
                    LEARN MORE
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

export default Contact;
