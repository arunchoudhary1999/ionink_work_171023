import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const sendButton = () => {
    alert(
      `Your Data Is Here : \n Name : ${name} \n Email : ${email} \n Message : ${message}`
    );
  };

  return (
    <div style={{ border: "1px solid black" }} className="contactPage">
      <div className="airplaneContainer">
        <img src="/assets/images/airplane.gif" className="airplane" alt="" />
      </div>
      <div className="airplaneContainer01">
        <img
          src="/assets/images/airplane01.gif"
          className="airplane01"
          style={{ zIndex: "-1" }}
          alt=""
        />
      </div>
      <div className="fluid-container mb-5 contactPage">
        <div className="row contactPageDivHeading" style={{ width: "100%" }}>
          <div className="col-12 py-4 my-4 " style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "700",
              }}
              className="contactPageHeading"
            >
              LET'S CONNECT
            </h1>
            <h2
              style={{
                fontSize: "3.5rem",
                fontWeight: "300",
              }}
              className="contactPageHeading01"
            >
              Time to connect the pulse!
            </h2>
          </div>
        </div>
        <div>
          <div
            className="container mb-5 contactPageHeadingForm"
            style={{
              width: "50%",
            }}
          >
            <div
              style={{
                padding: "5%",
                border: "1px solid black",
                borderRadius: "15px",
              }}
            >
              <form>
                <div class="">
                  <div class="col">
                    <label for="exampleFormControlTextarea1">Name</label>
                    <input
                      style={{
                        cursor: "text",
                        border: "1px solid black",
                        borderRadius: "15px",
                        margin: "10px 0",
                      }}
                      type="text"
                      class="form-control"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
                  onClick={sendButton}
                  class="btn btn-success"
                >
                  <h4>SEND</h4>
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