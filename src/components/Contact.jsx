import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { useEffect } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [help, setHelp] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  console.log({ name, help, email, number, description });

  const [tabTitle, setTabTitle] = useState(
    `${(document.title =
      "Contact | Brands Out Loud: Forefront For Everything Business")}`
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

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleHelp = (e) => {
    setHelp(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAPI = () => {
    axios
      .post("https://bol-9joj.onrender.com/user/sendmail", {
        name: name,
        help: help,
        email: email,
        number: number,
        description: description,
      })
      .then((result) => {
        console.log(result);
        alert(
          `Your Data Is Here : \n Name : ${name} \n Help : ${help} \n Number : ${number} \n Email : ${email} \n Description : ${description} \n Your Message is Successfully Send`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ border: "2px solid black" }} className="contactPage">
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
                      placeholder="Enter Your Name"
                      value={name}
                      onChange={handleName}
                    />
                  </div>
                  <div class="col">
                    <label for="exampleFormControlTextarea1">
                      How Can We Help?
                    </label>
                    <br />
                    <select
                      name="help"
                      class="form-control"
                      value={help}
                      style={{
                        cursor: "text",
                        border: "1px solid black",
                        borderRadius: "15px",
                        margin: "10px 0",
                        width: "100%",
                      }}
                      onChange={handleHelp}
                    >
                      <option
                        style={{ color: "lightGrey" }}
                        label="Select ..."
                      ></option>
                      <option value="Share Your Stroy">Share Your Stroy</option>
                      <option value="Advertise With Us">
                        Advertise With Us
                      </option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Join Our Team">Join Our Team</option>
                    </select>
                  </div>
                  <div class="col">
                    <label for="exampleFormControlTextarea1">
                      Phone Number
                    </label>
                    <input
                      style={{
                        border: "1px solid black",
                        borderRadius: "15px",
                        margin: "10px 0",
                      }}
                      type="number"
                      class="form-control"
                      name="number"
                      placeholder="Enter Your Number"
                      value={number}
                      onChange={handleNumber}
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
                      placeholder="Enter Your E-mail"
                      onChange={handleEmail}
                    />
                  </div>
                </div>
              </form>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">What's Up?</label>
                <textarea
                  style={{
                    border: "1px solid black",
                    borderRadius: "15px",
                    margin: "10px 0",
                  }}
                  name="description"
                  value={description}
                  onChange={handleDescription}
                  class="form-control"
                  placeholder="Describe in detail such that we can have the appropriate point of contact get in touch with you"
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
                  onClick={handleAPI}
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
