import React, { useState } from "react";
import "./Experience1.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Experience1 = () => {
  const [one01, setOne01] = useState(1);
  const [two02, setTwo02] = useState(1);
  const [three03, setThree03] = useState(1);
  const [four04, setFour04] = useState(1);
  const [five05, setFive05] = useState(1);

  // useEffect(() => {
  //   document.title = "Experience | BOL";
  // }, []);

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

    return () => {
      // Cleanup event listeners when the component unmounts
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, [tabTitle]);

  const hideShow01 = () => {
    if (one01 === 1) {
      document.getElementById("main01").style.display = "block";
      setOne01(0);
    } else {
      document.getElementById("main01").style.display = "none";
      setOne01(1);
    }
  };

  const hideShow02 = () => {
    if (two02 === 1) {
      document.getElementById("main02").style.display = "block";
      setTwo02(0);
    } else {
      document.getElementById("main02").style.display = "none";
      setTwo02(1);
    }
  };

  const hideShow03 = () => {
    if (three03 === 1) {
      document.getElementById("main03").style.display = "block";
      setThree03(0);
    } else {
      document.getElementById("main03").style.display = "none";
      setThree03(1);
    }
  };

  const hideShow04 = () => {
    if (four04 === 1) {
      document.getElementById("main04").style.display = "block";
      setFour04(0);
    } else {
      document.getElementById("main04").style.display = "none";
      setFour04(1);
    }
  };

  const hideShow05 = () => {
    if (five05 === 1) {
      document.getElementById("main05").style.display = "block";
      setFive05(0);
    } else {
      document.getElementById("main05").style.display = "none";
      setFive05(1);
    }
  };

  return (
    <>
      <div style={{ border: "2px solid black" }}>
        <div className="tableOne">
          <table>
            <tr>
              <td className="tableContainerColumn01 onlyTd">Magazines</td>
              <td className="onlyTd">Merchandise</td>
              <td className="onlyTd">Get Social</td>
              <td className="onlyTd">
                Upcoming Events, Webinars, and Podcasts
              </td>
              <td className="onlyTd">Advertise With Us</td>
              <td
                className="tableContainerColumn01 onlyTd"
                onClick={hideShow01}
              >
                +
              </td>
            </tr>
            <tr className="dropDownRowOne01">
              <td className="dropDownRowOne01" colSpan="6">
                <div id="main01" style={{ display: one01 ? "none" : "block" }}>
                  ★ Our magazine unveils the journeys of daring dreamers who
                  transformed ideas into legends. Stories that inspire, empower,
                  and redefine success.
                </div>
              </td>
            </tr>
            <tr>
              <td className="onlyTd">Magazines</td>
              <td className="tableContainerColumn01 onlyTd">Merchandise</td>
              <td className="onlyTd">Get Social</td>
              <td className="onlyTd">
                Upcoming Events, Webinars, and Podcasts
              </td>
              <td className="onlyTd">Advertise With Us</td>
              <td
                className="tableContainerColumn01 onlyTd"
                onClick={hideShow02}
              >
                +
              </td>
            </tr>
            <tr className="dropDownRowOne01">
              <td className="dropDownRowOne01" colSpan="6">
                <div id="main02" style={{ display: two02 ? "none" : "block" }}>
                  ★ Elevate your gifting with our unique merchandise. Get
                  personalised mementoes, creative surprises, and engagement
                  treasures that redefine team bonding..
                </div>
              </td>
            </tr>
            <tr>
              <td className="onlyTd">Magazines</td>
              <td className="onlyTd">Merchandise</td>
              <td className="tableContainerColumn01 onlyTd">Get Social</td>
              <td className="onlyTd">
                Upcoming Events, Webinars, and Podcasts
              </td>
              <td className="onlyTd">Advertise With Us</td>
              <td
                className="tableContainerColumn01 onlyTd"
                onClick={hideShow03}
              >
                +
              </td>
            </tr>
            <tr className="dropDownRowOne01">
              <td className="dropDownRowOne01" colSpan="6">
                <div
                  id="main03"
                  style={{ display: three03 ? "none" : "block" }}
                >
                  ★ Join our dynamic social community, where brands, startups,
                  and visionaries collaborate seamlessly. Foster global
                  connections and influence across platforms.
                </div>
              </td>
            </tr>
            <tr>
              <td className="onlyTd">Magazines</td>
              <td className="onlyTd">Merchandise</td>
              <td className="onlyTd">Get Social</td>
              <td className="tableContainerColumn01 onlyTd">
                Upcoming Events, Webinars, and Podcasts
              </td>
              <td className="onlyTd">Advertise With Us</td>
              <td
                className="tableContainerColumn01 onlyTd"
                onClick={hideShow04}
              >
                +
              </td>
            </tr>
            <tr className="dropDownRowOne01">
              <td className="dropDownRowOne01" colSpan="6">
                <div id="main04" style={{ display: four04 ? "none" : "block" }}>
                  ★ Embark on a journey of intellectual prowess. Uncover
                  insights, challenge norms, and ignite innovation through our
                  immersive events, webinars, and thought-provoking podcasts.
                </div>
              </td>
            </tr>
            <tr>
              <td className="onlyTd">Magazines</td>
              <td className="onlyTd">Merchandise</td>
              <td className="onlyTd">Get Social</td>
              <td className="onlyTd">
                Upcoming Events, Webinars, and Podcasts
              </td>
              <td className="tableContainerColumn01 onlyTd">
                Advertise With Us
              </td>
              <td
                className="tableContainerColumn01 onlyTd"
                onClick={hideShow05}
              >
                +
              </td>
            </tr>
            <tr className="dropDownRowOne01">
              <td className="dropDownRowOne01" colSpan="6">
                <div id="main05" style={{ display: five05 ? "none" : "block" }}>
                  ★ Your brand, our canvas. Collaborate to weave compelling
                  narratives, showcasing your essence. Together, let's make
                  waves that create ripples across industries
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <div
            style={{
              width: "100%",
              display: "flex",
              minHeight: "580px",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            className="experienceblogTop01"
          >
            <div className="experienceblogHeading00">
              <h1 className="experienceblogHeading01">
                {" "}
                What BOL Has To Offer
              </h1>
            </div>
            <div className="experienceblogTwoMainDiv01">
              <div class="card-deck experienceblogTwoMainInnerDiv">
                <div class="experienceblogTwoMainImgCardStyle other01">
                  <div class="card-body experienceblogTwoMainTextStyle ">
                    <h1 className="experienceblogTwoMainTextStyleH1">
                      Magazine
                    </h1>
                    <h5 class="card-title experienceblogTwoMainTextStyle2H5">
                      Our monthly editions seek to unveil stories that inspire,
                      empower, and redefine success, one page at a time.
                    </h5>

                    <p class="card-text experienceblogTwoMainTextStyle2P">
                      <NavLink
                        to="/magazine"
                        className="experienceblogTwoMainTextStyle2P"
                      >
                        Read Now
                      </NavLink>
                    </p>
                  </div>
                </div>
                <div class="experienceblogTwoMainImgCardStyle other02">
                  <div class="card-body experienceblogTwoMainTextStyle">
                    <h1 className="experienceblogTwoMainTextStyleH1">Books</h1>
                    <h5 class="card-title experienceblogTwoMainTextStyle2H5">
                      Invest in the power of knowledge with our byte-sized take
                      on various industries, verticals, and interests.
                    </h5>

                    <p class="card-text experienceblogTwoMainTextStyle2P">
                      <NavLink
                        to="/books"
                        className="experienceblogTwoMainTextStyle2P"
                      >
                        Explore Now
                      </NavLink>
                    </p>
                  </div>
                </div>
                <div class="experienceblogTwoMainImgCardStyle other03">
                  <div class="card-body experienceblogTwoMainTextStyle">
                    <h1 className="experienceblogTwoMainTextStyleH1">
                      Events, Webinars, and Podcasts
                    </h1>
                    <h5 class="card-title experienceblogTwoMainTextStyle2H5">
                      Embark on a journey of intellectual prowess. Uncover
                      insights, and challenge norms, led by industry experts.
                    </h5>

                    <p class="card-text experienceblogTwoMainTextStyle2P">
                      <NavLink
                        to="/contact"
                        className="experienceblogTwoMainTextStyle2P"
                      >
                        Register Now
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
