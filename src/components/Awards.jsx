import React from "react";
import "./Award.css";

const Awards = () => {
  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        // border: "2px solid black",
        background: "#d661ff",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      className="awardDiv"
    >
      <div className="row awardTopDivRes">
        <div
          className="col-6 awardTopDivResInner"
          style={{
            textAlign: "center",
            display: "flex",
            width: "100%",
            margin: "auto",
          }}
        >
          <img
            src="/assets/images/medal.png"
            alt="Contact Us"
            className="award"
          />
          <h1
            style={{
              fontSize: "5vw",
              fontWeight: "900",
              color: "black",
              paddingTop: "8%",
            }}
            className="awardHeadingTop"
          >
            {" "}
            BOL RESOURCE HUB
          </h1>
        </div>
      </div>
      <div className="award-part-1">
        <br />
        <div className="awardC02">
          <div className="awardSpeechb02">
            <div class="card-body" style={{ padding: "4% 5%" }}>
              <h5 class="card-title awardTableRow02">
                <td className="awardTableTd021">The Startup Connect</td>
                <td className="awardTableTd022">For Startup Enthusiast</td>
              </h5>
              <hr style={{ border: "2px solid black" }} />
              <h5 class="card-title awardTableRow02">
                <td className="awardTableTd021"> Branding Maestros</td>
                <td className="awardTableTd022">For The Marketing Geek</td>
              </h5>
              <hr style={{ border: "2px solid black" }} />
              <h5 class="card-title awardTableRow02">
                <td className="awardTableTd021"> Creator Grove</td>
                <td className="awardTableTd022">
                  {" "}
                  For The Up and Coming Creator
                </td>
              </h5>
              <hr style={{ border: "2px solid black" }} />
              <h5 class="card-title awardTableRow02">
                <td className="awardTableTd021"> Tech Hub</td>
                <td className="awardTableTd022"> For All Things Tech</td>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Awards;
