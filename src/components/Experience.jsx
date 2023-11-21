import React from "react";
import "./Experience.css";
import Experience1 from "./Experience1";
import { useState, useEffect } from "react";

// const Exprience = () => {
//   // useEffect(() => {
//   //   document.title = "Experience | BOL";
//   // }, []);

//   const [tabTitle, setTabTitle] = useState(
//     `${(document.title = "Experience | BOL")}`
//   );

//   useEffect(() => {
//     const handleBlur = () => {
//       document.title = "😞 Missing you already";
//     };

//     const handleFocus = () => {
//       document.title = tabTitle;
//     };

//     window.addEventListener("blur", handleBlur);
//     window.addEventListener("focus", handleFocus);

//     return () => {
//       // Cleanup event listeners when the component unmounts
//       window.removeEventListener("blur", handleBlur);
//       window.removeEventListener("focus", handleFocus);
//     };
//   }, [tabTitle]);

//   return (
//     <>
//       <div style={{ border: "2px solid black", height: "100%" }}>
//         <div className="fluid-container experienceSlider">
//           {/* <div className="row airplaneContainer02" style={{ width: "100%" }}>
//             <div className="col-12 airplane02" style={{ textAlign: "center" }}>
//               <h1
//                 style={{
//                   fontSize: "8vw",
//                   fontWeight: "900",
//                   display: "flex",
//                   margin: "auto",
//                   flexDirection: "row",
//                 }}
//                 className="experienceH1Tag"
//                 data-text="Experience"
//               >
//                 STARTUPS&nbsp;
//                 <h1 className="experienceH1InnerTag">PEOPLE&nbsp;</h1>
//                 INNOVATION&nbsp;
//                 <h1 className="experienceH1InnerTag">CURIOSITY</h1>
//               </h1>
//             </div>
//           </div> */}
//           <div className="text-wrapper">
//             <h1>
//               Startups <span className="text-wrapper-stoke">| People</span> |
//               Innovation <span className="text-wrapper-stoke">| Curiosity</span>
//             </h1>
//             <h1>
//               Startups <span className="text-wrapper-stoke">| People</span> |
//               Innovation <span className="text-wrapper-stoke">| Curiosity</span>
//             </h1>
//           </div>

//           <hr style={{ border: "1px solid black" }} />
//           <hr style={{ border: "1px solid black", marginTop: "-18px" }} />
//           <div
//             className="row d-flex justify-content-center experienceDiv"
//             style={{
//               width: "80%",
//               marginTop: "90px",
//               alignItems: "center",
//             }}
//           >
//             <div className="col-md d-flex justify-content-center">
//               <img
//                 src="/assets/images/experience.gif"
//                 alt="Contact Us"
//                 height="300px"
//                 width="400px"
//                 className="experienceImg"
//               />
//             </div>
//             <div className="c">
//               <div className="speechb">
//                 <div class="card-body" style={{ padding: "5% 5%" }}>
//                   <h5 class="card-title">
//                     A team of designers, writers, and creators connecting
//                     brilliant minds. <br />
//                     <br />
//                   </h5>
//                   <p class="card-text">
//                     We ignite stories, celebrate entrepreneurship, and thrive on
//                     the sparks of imagination. From startups to trailblazers,
//                     we're the cosmic cheerleaders propelling dreams to galaxies
//                     of success. <br />
//                     <br />
//                     We craft a confetti-filled carnival where every brand can
//                     unmute their imagination and creativity, every
//                     entrepreneur's journey and success is shared and celebrated,
//                     and innovation takes centerstage fueled by curiosity and
//                     collective brilliance.
//                     <br />
//                     <br />
//                     We are Brands Out Loud—where stories, collaboration, and
//                     innovation merge.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Experience1 />
//     </>
//   );
// };

const Exprience = () => {
  // useEffect(() => {
  //   document.title = "Experience | BOL";
  // }, []);

  const reveal = () => {
    const reveals = document.querySelectorAll(".expReveals");
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
      "Experience | Brands Out Loud: Forefront For Everything Business")}`
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
      <div style={{ border: "2px solid black", height: "100%" }}>
        <div className="text-wrapper expReveals">
          <h1>
            | Startups <span className="text-wrapper-stoke">| People</span> |
            Innovation <span className="text-wrapper-stoke">| Curiosity</span>
          </h1>
          <h1>
            | Startups <span className="text-wrapper-stoke">| People</span> |
            Innovation <span className="text-wrapper-stoke">| Curiosity</span>
          </h1>
        </div>

        <hr style={{ border: "1px solid black" }} className="expReveals" />
        <hr
          style={{ border: "1px solid black", marginTop: "-18px" }}
          className="expReveals"
        />
        <div
          className="expRadiusDivMain"
          style={{
            width: "100%",
            // background: "rgb(135,206,250)",
            // background: "linear-Gradient(#72eca5, #54b8d8)",
            height: "740px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="expRadiusDiv expReveals">
            <div className="expRadiusDivFirHeadiing">
              <h1 className="expRadiusDivH1">
                "We ignite stories,
                <br />
                celebrate
                <br />
                entrepreneurship,
                <br />
                and thrive on the
                <br />
                sparks of
                <br />
                imagination."
              </h1>
            </div>
            <div className="expRadiusDivSecImgPara">
              <img
                className="expRadiusDivSecImg"
                src="/assets/images/expPageImg.png"
                alt="expPageImg"
              />
              <h6 className="expRadiusDivSecPara">
                We craft a confetti-filled carnival where every brand can
                <br />
                unmute their imagination and creativity, every entrepreneur's
                <br />
                journey and success is shared and celebrated, and innovation
                <br />
                takes centerstage fueled by curiosity and collective brilliance.
                <br />
                <br />
                We are Brands Out Loud—where stories, collaboration, and
                <br />
                innovation merge.
              </h6>
            </div>
          </div>
        </div>
        {/* <div className="fluid-container experienceSlider">
          <div className="text-wrapper">
            <h1>
              | Startups <span className="text-wrapper-stoke">| People</span> |
              Innovation <span className="text-wrapper-stoke">| Curiosity</span>
            </h1>
            <h1>
              | Startups <span className="text-wrapper-stoke">| People</span> |
              Innovation <span className="text-wrapper-stoke">| Curiosity</span>
            </h1>
          </div>

          <hr style={{ border: "1px solid black" }} />
          <hr style={{ border: "1px solid black", marginTop: "-18px" }} />
          {/* <div
            className="row d-flex justify-content-center experienceDiv"
            style={{
              width: "80%",
              marginTop: "90px",
              alignItems: "center",
            }}
          >
            <div className="col-md d-flex justify-content-center bodyBubble">
              <div className="bubble">
                <span></span>
                <p>What Do We Do?</p>
              </div>
              <div className="bubble01">
                <span></span>
              </div>
              
              <img
                src="/assets/images/experience.gif"
                alt="Contact Us"
                height="300px"
                width="400px"
                className="experienceImg"
              />
            </div>
            <div className="c">
              <div className="speechb">
                <div class="card-body" style={{ padding: "5% 5%" }}>
                  <h5 class="card-title">
                    <b>
                      “We ignite stories, celebrate entrepreneurship, and thrive
                      on the sparks of imagination.”
                    </b>{" "}
                    <br />
                    <br />
                  </h5>
                  <p class="card-text">
                    We ignite stories, celebrate entrepreneurship, and thrive on
                    the sparks of imagination. From startups to trailblazers,
                    we're the cosmic cheerleaders propelling dreams to galaxies
                    of success. <br />
                    <br />
                    We craft a confetti-filled carnival where every brand can
                    unmute their imagination and creativity, every
                    entrepreneur's journey and success is shared and celebrated,
                    and innovation takes centerstage fueled by curiosity and
                    collective brilliance.
                    <br />
                    <br />
                    We are Brands Out Loud—where stories, collaboration, and
                    innovation merge.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
      </div>

      <Experience1 />
    </>
  );
};

export default Exprience;
