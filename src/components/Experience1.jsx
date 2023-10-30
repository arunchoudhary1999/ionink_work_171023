import React, { useState } from "react";
import "./Experience.css";

const Experience1 = () => {
  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRow = (rowId) => {
    if (expandedRows.includes(rowId)) {
      setExpandedRows(expandedRows.filter((id) => id !== rowId));
    } else {
      setExpandedRows([...expandedRows, rowId]);
    }
  };

  const isRowExpanded = (rowId) => expandedRows.includes(rowId);

  const data = [
    {
      id: 1,
      attendance: "Magazines",
      company: "Merchandise",
      title: "Get Social",
      location: "Upcoming Events",
      content:
        "★ Our magazine unveils the journeys of daring dreamers who transformed ideas into legends. Stories that inspire, empower, and redefine success.",
      content01:
        "★ Elevate your gifting with our unique merchandise. Get personalised mementoes, creative surprises, and engagement treasures that redefine team bonding.",
      content02:
        "★ Join our dynamic social community, where brands, startups, and visionaries collaborate seamlessly. Foster global connections and influence across platforms.",
      content03:
        "★ Embark on a journey of intellectual prowess. Uncover insights, challenge norms, and ignite innovation through our immersive events, webinars, and thought-provoking podcasts.",
      content04:
        "★ Your brand, our canvas. Collaborate to weave compelling narratives, showcasing your essence. Together, let's make waves that create ripples across industries",
    },

    {
      id: 2,
      attendance: "Magazines",
      company: "Merchandise",
      title: "Get Social",
      location: "Upcoming Events",
      content:
        "★ Our magazine unveils the journeys of daring dreamers who transformed ideas into legends. Stories that inspire, empower, and redefine success.",
      content01:
        "★ Elevate your gifting with our unique merchandise. Get personalised mementoes, creative surprises, and engagement treasures that redefine team bonding.",
      content02:
        "★ Join our dynamic social community, where brands, startups, and visionaries collaborate seamlessly. Foster global connections and influence across platforms.",
      content03:
        "★ Embark on a journey of intellectual prowess. Uncover insights, challenge norms, and ignite innovation through our immersive events, webinars, and thought-provoking podcasts.",
      content04:
        "★ Your brand, our canvas. Collaborate to weave compelling narratives, showcasing your essence. Together, let's make waves that create ripples across industries",
    },
    {
      id: 3,
      attendance: "Magazines",
      company: "Merchandise",
      title: "Get Social",
      location: "Upcoming Events",
      content:
        "★ Our magazine unveils the journeys of daring dreamers who transformed ideas into legends. Stories that inspire, empower, and redefine success.",
      content01:
        "★ Elevate your gifting with our unique merchandise. Get personalised mementoes, creative surprises, and engagement treasures that redefine team bonding.",
      content02:
        "★ Join our dynamic social community, where brands, startups, and visionaries collaborate seamlessly. Foster global connections and influence across platforms.",
      content03:
        "★ Embark on a journey of intellectual prowess. Uncover insights, challenge norms, and ignite innovation through our immersive events, webinars, and thought-provoking podcasts.",
      content04:
        "★ Your brand, our canvas. Collaborate to weave compelling narratives, showcasing your essence. Together, let's make waves that create ripples across industries",
    },
    {
      id: 4,
      attendance: "Magazines",
      company: "Merchandise",
      title: "Get Social",
      location: "Upcoming Events",
      content:
        "★ Our magazine unveils the journeys of daring dreamers who transformed ideas into legends. Stories that inspire, empower, and redefine success.",
      content01:
        "★ Elevate your gifting with our unique merchandise. Get personalised mementoes, creative surprises, and engagement treasures that redefine team bonding.",
      content02:
        "★ Join our dynamic social community, where brands, startups, and visionaries collaborate seamlessly. Foster global connections and influence across platforms.",
      content03:
        "★ Embark on a journey of intellectual prowess. Uncover insights, challenge norms, and ignite innovation through our immersive events, webinars, and thought-provoking podcasts.",
      content04:
        "★ Your brand, our canvas. Collaborate to weave compelling narratives, showcasing your essence. Together, let's make waves that create ripples across industries",
    },
    {
      id: 5,
      attendance: "Magazines",
      company: "Merchandise",
      title: "Get Social",
      location: "Upcoming Events",
      content:
        "★ Our magazine unveils the journeys of daring dreamers who transformed ideas into legends. Stories that inspire, empower, and redefine success.",
      content01:
        "★ Elevate your gifting with our unique merchandise. Get personalised mementoes, creative surprises, and engagement treasures that redefine team bonding.",
      content02:
        "★ Join our dynamic social community, where brands, startups, and visionaries collaborate seamlessly. Foster global connections and influence across platforms.",
      content03:
        "★ Embark on a journey of intellectual prowess. Uncover insights, challenge norms, and ignite innovation through our immersive events, webinars, and thought-provoking podcasts.",
      content04:
        "★ Your brand, our canvas. Collaborate to weave compelling narratives, showcasing your essence. Together, let's make waves that create ripples across industries",
    },
    {
      id: 6,
      attendance: "Magazines",
      company: "Merchandise",
      title: "Get Social",
      location: "Upcoming Events",
      content:
        "★ Our magazine unveils the journeys of daring dreamers who transformed ideas into legends. Stories that inspire, empower, and redefine success.",
      content01:
        "★ Elevate your gifting with our unique merchandise. Get personalised mementoes, creative surprises, and engagement treasures that redefine team bonding.",
      content02:
        "★ Join our dynamic social community, where brands, startups, and visionaries collaborate seamlessly. Foster global connections and influence across platforms.",
      content03:
        "★ Embark on a journey of intellectual prowess. Uncover insights, challenge norms, and ignite innovation through our immersive events, webinars, and thought-provoking podcasts.",
      content04:
        "★ Your brand, our canvas. Collaborate to weave compelling narratives, showcasing your essence. Together, let's make waves that create ripples across industries",
    },

    // {
    //   id: 2,
    //   attendance: "2020-2022",
    //   company: "MetaLab",
    //   title: "Design Lead",
    //   location: "Remote",
    //   content: "★ Merchandise",
    //   content01:
    //     "★ Elevate your gifting with our unique merchandise. Get personalised mementoes, creative surprises, and engagement treasures that redefine team bonding.",
    // },
    // {
    //   id: 3,
    //   attendance: "2018-2020",
    //   company: "Huawei",
    //   title: "UX Design Manager",
    //   location: "Milan, Italy",
    //   content: "★ Get Social",
    //   content01:
    //     "★ Join our dynamic social community, where brands, startups, and visionaries collaborate seamlessly. Foster global connections and influence across platforms.",
    // },
    // {
    //   id: 4,
    //   attendance: "2018",
    //   company: "Alkemy",
    //   title: "Senior Product Designer",
    //   location: "Milan, Italy",
    //   content: "★ Upcoming Events, Webinars, and Podcasts",
    //   content01:
    //     "★ Embark on a journey of intellectual prowess. Uncover insights, challenge norms, and ignite innovation through our immersive events, webinars, and thought-provoking podcasts.",
    // },
    // {
    //   id: 5,
    //   attendance: "2020-2022",
    //   company: "JibJab",
    //   title: "Senior Product Designer",
    //   location: "Los Angles, California",
    //   content: "★ Advertise With Us",
    //   content01:
    //     "★ Your brand, our canvas. Collaborate to weave compelling narratives, showcasing your essence. Together, let's make waves that create ripples across industries",
    // },
  ];

  return (
    <div
      style={{
        width: "100%",
        // border: "1px solid black",
      }}
      className="experience01LookTable"
    >
      <div className="container">
        <table className="table">
          <tbody style={{ verticalAlign: "middle", direction: "flex" }}>
            {data.map((row) => (
              <React.Fragment key={row.id}>
                <tr>
                  <th style={{}}>{row.attendance}</th>
                  <td style={{}}>{row.company}</td>
                  <td style={{}}>{row.title}</td>
                  <td style={{}}>{row.location}</td>
                  <th
                    style={{
                      fontWeight: "900",
                      // fontSize: "1rem",
                    }}
                    onClick={() => toggleRow(row.id)}
                    className={`clickable ${
                      isRowExpanded(row.id) ? "active" : ""
                    }`}
                  >
                    {isRowExpanded(row.id) ? "x" : "+"}
                  </th>
                </tr>
                {isRowExpanded(row.id) && (
                  <tr className="container">
                    <td
                      colSpan="6"
                      style={{
                        background: "#ffcb46",
                        // padding: "0px",
                        // margin: "0px",
                      }}
                    >
                      <ul
                        style={{
                          listStyleType: "none",
                          color: "black",
                          fontSize: "25px",
                          // margin: "0px",
                        }}
                        className="experience01TableCol"
                      >
                        <li>{row.content}</li>
                        <li>{row.content01}</li>
                        <li>{row.content02}</li>
                        <li>{row.content03}</li>
                        <li>{row.content04}</li>
                        {/* <li>{row.content05}</li>
                        <li>{row.content06}</li> */}
                      </ul>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Experience1;
