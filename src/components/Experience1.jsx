import React, { useState } from "react";

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
      attendance: "Current",
      company: "Metafy",
      title: "Design Lead",
      location: "Remote",
      content:
        "★ Designing an educational platform for gamers from gamers, with particular focus on the content streaming features.",
      content01: "★ Leading a distributed team of designers.1",
    },
    {
      id: 2,
      attendance: "2020-2022",
      company: "MetaLab",
      title: "Design Lead",
      location: "Remote",
      content:
        "★ Leading design teams during the creation of digital experiences for startups and industry leaders.",
      content01: "★ Estimating team efforts and roadmaps.",
      content02:
        "★ Coordinating design team efforts with Research and Engineering teams.",
      content03:
        "★ Supporting the Research team in shaping testing and interviews and summarizing findings to clients.",
      content04:
        "★ Presenting design solutions to clients, articulating the team's decisions.",
      content05: "★ Mentoring and coaching product designers.",
      content06: "★ Interviewing design candidates.",
    },
    {
      id: 3,
      attendance: "2018-2020",
      company: "Huawei",
      title: "UX Design Manager",
      location: "Milan, Italy",
      content:
        "★ Design, concept, envisioning and research for all the digital components of Huawei consumer products on a global level. Including automotive HMI solutions.",
      content01:
        "★ Lead designer for Milan's R&D studio in Huawei's efforts in in-car experiences, collaborating remotely and on-site with Shanghai's lab.",
      content02:
        "★ R&D for Huawei's new proprietary cross-device operating system 'Harmony'.",
      content03:
        "★ Collaborating with Industrial Designers to envision new devices with a holistic software/hardware approach.",
    },
    {
      id: 4,
      attendance: "2018",
      company: "Alkemy",
      title: "Senior Product Designer",
      location: "Milan, Italy",
      content:
        "★ Design of complex digital products, desktop, and mobile, for big companies pursuing digital transformation processes.",
      content01: "★ Conducting co-design workshops with clients.",
      content02: "★ Mentoring junior designers.",
    },
    {
      id: 5,
      attendance: "2020-2022",
      company: "JibJab",
      title: "Senior Product Designer",
      location: "Los Angles, California",
      content: "★ Design of digital products for kids.",
      content01:
        "★ Mobile video player apps, educational platforms, games, websites.",
      content02: "★ Team leader for the content team.",
    },
    {
      id: 6,
      attendance: "2018-2020",
      company: "Huawei",
      title: "Senior Product Designer",
      location: "Milan, Italy",
      content:
        "★ Design of digital products, desktop and mobile for major national and international brands.",
      content01: "★ Social apps, mobile games, web applications.",
    },
    {
      id: 7,
      attendance: "2007-2013",
      company: "Pbcom",
      title: "Digital Art Director",
      location: "Genoa, Tlaly",
      content: "★ Web design.",
      content01: "★ Digital campaign.",
      content02: "★ Branding.",
    },
    // Add more data as needed
  ];

  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        border: "2px solid black",
      }}
    >
      <div className="container">
        <table
          className="table"
          style={{
            border: "1px solid black",
            fontSize: "35px",
            marginBottom: "0px",
            width: "100%",
            minHeight: "737px",
          }}
        >
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
                      fontSize: "55px",
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
                      colSpan="5"
                      style={{
                        background: "#ffcb46",
                        padding: "0px",
                        margin: "0px",
                      }}
                    >
                      <ul
                        style={{
                          listStyleType: "none",
                          color: "black",
                          fontSize: "25px",
                          margin: "0px",
                        }}
                      >
                        <li>{row.content}</li>
                        <li>{row.content01}</li>
                        <li>{row.content02}</li>
                        <li>{row.content03}</li>
                        <li>{row.content04}</li>
                        <li>{row.content05}</li>
                        <li>{row.content06}</li>
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
