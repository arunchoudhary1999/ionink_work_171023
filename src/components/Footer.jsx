import React, { useEffect } from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const reveal = () => {
    const reveals = document.querySelectorAll(".footerReveals");
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

  useEffect(() => {
    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <div
      style={{
        border: "2px solid black",
        height: "auto",
        padding: "0px 10px 0px 22px",
      }}
      className="footerPage"
    >
      <nav class="navbar footerPageDiv">
        <div className="footerLogo ">
          <NavLink class="navbar-brand footerReveals" to="/">
            <img
              src="/assets/images/footerImg.png"
              alt="Logo"
              width="65"
              height="200"
              class="d-inline-block align-text-top"
            />
            <img
              src="/assets/images/footerImg.png"
              alt="Logo"
              width="65"
              height="200"
              class="d-inline-block align-text-top"
            />
            <img
              src="/assets/images/footerImg.png"
              alt="Logo"
              width="65"
              height="200"
              class="d-inline-block align-text-top"
            />
          </NavLink>
          <p className="footerReveals">
            This is where our website ends, but this is where your journey
            begins. You deserve a virtual high-five! 🖐
          </p>
        </div>
        <nav class="navbar navbar-expand footerMenu">
          <div class="container-fluid ">
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
              <ul class="navbar-nav footerMenuUl footerReveals">
                <li class="nav-item">
                  <a class="nav-link text-dark" href="/magazine">
                    Magazine
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="/books">
                    Books
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="/blog">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="/contact">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="/">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>

      <div className="footerLastBottom">
        <p className="footerLastPara">Owned & Operated By&nbsp;</p>
        <li className="footerLastLink">
          <a
            class="nav-link text-dark "
            href="https://suflexmedia.com/"
            target="_parent"
          >
            <p className="footerLastPara footerLastLink">Suflex Media</p>
          </a>
        </li>
      </div>
    </div>
  );
};

export default Footer;
