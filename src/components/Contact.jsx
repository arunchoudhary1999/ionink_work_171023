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
      document.title = "Missing you already";
    };

    const handleFocus = () => {
      document.title = tabTitle;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    // window.addEventListener("scroll", reveal);

    return () => {
      // Cleanup event listeners when the component unmounts
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      // window.removeEventListener("scroll", reveal);
      hiddenElements.forEach((el) => observer.unobserve(el));
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
        // alert("Its server error");
      });
  };

  const message = () => {
    var name = document.getElementById("name");
    var help = document.getElementById("help");
    var email = document.getElementById("email");
    var number = document.getElementById("number");
    var description = document.getElementById("description");
    const success = document.getElementById("success");
    const danger = document.getElementById("danger");

    if (
      name.value === "" ||
      help.value === "" ||
      email.value === "" ||
      number.value === "" ||
      description.value === ""
    ) {
      danger.style.display = "block";
    } else {
      setTimeout(() => {
        name.value = "";
        help.value = "";
        email.value = "";
        number.value = "";
        description.value = "";
      }, 2000);

      success.style.display = "block";
    }

    setTimeout(() => {
      danger.style.display = "none";
      success.style.display = "none";
    }, 4000);
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
      <div className="fluid-container mb-5 contactPage hidden">
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
            className="container mb-5 contactPageHeadingForm hidden"
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
              <div className="message">
                <div className="success" id="success">
                  Your Message Successfully Send!
                  <br />
                  Thank You 👍
                </div>
                <div className="danger" id="danger">
                  Feilds Can't be Empty!
                  <br />
                  Try Again 👎
                </div>
              </div>
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
                      id="name"
                      onChange={handleName}
                      required
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
                      id="help"
                      required
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
                      <option value="Share Your Stroy">Share Your Story</option>
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
                      type="tel"
                      minLength="10"
                      maxlength="14"
                      class="form-control "
                      name="number"
                      id="number"
                      placeholder="Enter Your Number"
                      value={number}
                      onChange={handleNumber}
                      required
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
                      id="email"
                      value={email}
                      placeholder="Enter Your E-mail"
                      onChange={handleEmail}
                      required
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
                  id="description"
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
                  }}
                  onClick={handleAPI}
                  class="btn btn-success sendContact"
                >
                  <h4 className="onSend" onClick={message}>
                    SEND
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
