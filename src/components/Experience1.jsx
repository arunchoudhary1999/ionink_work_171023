/* Experience1 Page Style */
import React, { useState } from "react";
import "./Experience1.css";
import { useEffect } from "react";

const Experience1 = () => {
  const reveal = () => {
    const reveals = document.querySelectorAll(".exp1Reveals");
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
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("scroll", reveal);
    };
  }, [tabTitle]);

  return (
    <>
      <div style={{ border: "2px solid black" }} className="newExpPage02Main">
        <div className="exp1Reveals">
          <div
            style={{
              width: "100%",
              display: "flex",
              minHeight: "580px",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            className="newexperienceblogTop01 "
          >
            <div className="newexperienceblogHeading00">
              <h1 className="newexperienceblogHeading01">
                {" "}
                What BOL Has To Offer
              </h1>
            </div>
            <div className="newexperienceblogTwoMainDiv01">
              <div className="card-deck newexperienceblogTwoMainInnerDiv">
                <div className="newexperienceblogTwoMainImgCardStyle newother01">
                  <div className="card-body newexperienceblogTwoMainTextStyle">
                    <img
                      src="/assets/images/magazineLogo.png"
                      alt="magazineLogo"
                      className="newexperienceblogTwoMainLogoStyle"
                    />
                    <h1 className="newexperienceblogTwoMainTextStyleH1">
                      Magazine
                    </h1>
                    <h5 className="card-title newexperienceblogTwoMainTextStyle2H5">
                      Our monthly editions seek to unveil stories that inspire,
                      empower, and redefine success, one page at a time.
                    </h5>
                  </div>
                </div>
                <div className="newexperienceblogTwoMainImgCardStyle newother02">
                  <div className="card-body newexperienceblogTwoMainTextStyle">
                    <img
                      src="/assets/images/booksLogo.png"
                      alt="magazineLogo"
                      className="newexperienceblogTwoMainLogoStyle"
                    />
                    <h1 className="newexperienceblogTwoMainTextStyleH1">
                      Books
                    </h1>
                    <h5 className="card-title newexperienceblogTwoMainTextStyle2H5">
                      Invest in the power of knowledge with our byte-sized take
                      on various industries, verticals, and interests.
                    </h5>
                  </div>
                </div>
                <div className="newexperienceblogTwoMainImgCardStyle newother03">
                  <div className="card-body newexperienceblogTwoMainTextStyle">
                    <img
                      src="/assets/images/EventsLogo.png"
                      alt="magazineLogo"
                      className="newexperienceblogTwoMainLogoStyle"
                    />
                    <h1 className="newexperienceblogTwoMainTextStyleH1">
                      Events
                    </h1>
                    <h5 className="card-title newexperienceblogTwoMainTextStyle2H5">
                      Embark on a journey of intellectual prowers. Uncover
                      insights, and challenge norms, led by industry experts.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="newexperienceblogHeadingButtonDiv">
            <button className="newexperienceblogHeadingButtonTag">
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience1;

// import React, { useState } from "react";
// import "./Experience.css";

// const Experience1 = () => {
//   const [expandedRows, setExpandedRows] = useState([]);

//   const toggleRow = (rowId) => {
//     if (expandedRows.includes(rowId)) {
//       setExpandedRows(expandedRows.filter((id) => id !== rowId));
//     } else {
//       setExpandedRows([...expandedRows, rowId]);
//     }
//   };

//   const isRowExpanded = (rowId) => expandedRows.includes(rowId);

//   const data = [
//     {
//       id: 1,
//       attendance: "Magazines",
//       company: "Merchandise",
//       title: "Get Social",
//       location: "Upcoming Events, Webinars, and Podcasts",
//       add: "Advertise With Us",
//       content:
//         "★ Our magazine unveils the journeys of daring dreamers who transformed ideas into legends. Stories that inspire, empower, and redefine success.",
//     },

//     {
//       id: 2,
//       attendance: "Magazines",
//       company: "Merchandise",
//       title: "Get Social",
//       location: "Upcoming Events, Webinars, and Podcasts",
//       add: "Advertise With Us",
//       content01:
//         "★ Elevate your gifting with our unique merchandise. Get personalised mementoes, creative surprises, and engagement treasures that redefine team bonding.",
//     },
//     {
//       id: 3,
//       attendance: "Magazines",
//       company: "Merchandise",
//       title: "Get Social",
//       location: "Upcoming Events, Webinars, and Podcasts",
//       add: "Advertise With Us",
//       content02:
//         "★ Join our dynamic social community, where brands, startups, and visionaries collaborate seamlessly. Foster global connections and influence across platforms.",
//     },
//     {
//       id: 4,
//       attendance: "Magazines",
//       company: "Merchandise",
//       title: "Get Social",
//       location: "Upcoming Events, Webinars, and Podcasts",
//       add: "Advertise With Us",
//       content03:
//         "★ Embark on a journey of intellectual prowess. Uncover insights, challenge norms, and ignite innovation through our immersive events, webinars, and thought-provoking podcasts.",
//     },
//     {
//       id: 5,
//       attendance: "Magazines",
//       company: "Merchandise",
//       title: "Get Social",
//       location: "Upcoming Events, Webinars, and Podcasts",
//       add: "Advertise With Us",
//       content04:
//         "★ Your brand, our canvas. Collaborate to weave compelling narratives, showcasing your essence. Together, let's make waves that create ripples across industries",
//     },
//   ];

//   return (
//     <div
//       style={{
//         width: "100%",
//         border: "2px solid black",
//       }}
//       className="experience01LookTable"
//     >
//       <div className="containerExp">
//         <table className="table">
//           <tbody style={{ verticalAlign: "middle", direction: "flex" }}>
//             {data.map((row) => (
//               <React.Fragment key={row.id}>
//                 <tr>
//                   <td style={{ fontWeight: "700" }} id="#demo">
//                     {row.attendance}
//                   </td>
//                   <td>{row.company}</td>
//                   <td>{row.title}</td>
//                   <td>{row.location}</td>
//                   <td>{row.add}</td>
//                   <th
//                     style={{
//                       fontWeight: "900",
//                       // fontSize: "1rem",
//                     }}
//                     onClick={() => toggleRow(row.id)}
//                     className={`clickable ${
//                       isRowExpanded(row.id) ? "active" : ""
//                     }`}
//                   >
//                     {isRowExpanded(row.id) ? "x" : "+"}
//                   </th>
//                 </tr>
//                 {isRowExpanded(row.id) && (
//                   <tr className="container">
//                     <td
//                       colSpan="6"
//                       style={{
//                         background: "#ffcb46",
//                         padding: "0px",
//                         margin: "0px",
//                       }}
//                     >
//                       <ul
//                         style={{
//                           listStyleType: "none",
//                           color: "black",
//                           fontSize: "25px",
//                           // margin: "0px",
//                         }}
//                         className="experience01TableCol"
//                       >
//                         <li>{row.content}</li>
//                         <li>{row.content01}</li>
//                         <li>{row.content02}</li>
//                         <li>{row.content03}</li>
//                         <li>{row.content04}</li>
//                       </ul>
//                     </td>
//                   </tr>
//                 )}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Experience1;
