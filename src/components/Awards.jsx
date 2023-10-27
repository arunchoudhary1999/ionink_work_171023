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
          }}
        >
          <img
            src="/assets/images/medal.png"
            alt="Contact Us"
            className="award"
          />
          <h1
            style={{
              fontSize: "8vw",
              fontWeight: "900",
              color: "black",
              paddingTop: "10%",
            }}
            className="awardHeadingTop"
          >
            {" "}
            AWARDS
          </h1>
        </div>
      </div>
      <div className="award-part-1">
        <br />
        <div className="awardC01">
          <div className="awardSpeechb01">
            <div
              class="card-body awardSpeechb01Btw"
              style={{ padding: "4% 5%" }}
            >
              <h5 class="card-title awardTableRow01">
                <td className="awardTableTd011">CSSDA Website Of The Day</td>
                <td className="awardTableTd012">This website</td>
              </h5>
              <hr style={{ border: "2px solid black" }} />
              <h5 class="card-title awardTableRow01">
                <td className="awardTableTd011">Awwwards Honorable Mention</td>
                <td className="awardTableTd012">This website</td>
              </h5>
              <hr style={{ border: "2px solid black" }} />
              <h5 class="card-title awardTableRow01">
                <td className="awardTableTd011">
                  CSSDA UI + UX + Innovation Awards
                </td>
                <td className="awardTableTd012">This website</td>
              </h5>
            </div>
          </div>
        </div>

        <br />
        <div className="awardC02">
          <div className="awardSpeechb02">
            <div class="card-body" style={{ padding: "4% 5%" }}>
              <h5 class="card-title awardTableRow02">
                <td className="awardTableTd021">
                  Emmy Award for “Outstanding Interactive”
                </td>
                <td className="awardTableTd022">Storybots apps and web</td>
              </h5>
              <hr style={{ border: "2px solid black" }} />
              <h5 class="card-title awardTableRow02">
                <td className="awardTableTd021">Webby Award honoree</td>
                <td className="awardTableTd022">storybots.com</td>
              </h5>
              <hr style={{ border: "2px solid black" }} />
              <h5 class="card-title awardTableRow02">
                <td className="awardTableTd021">Teachers' Choice Award</td>
                <td className="awardTableTd022">Storybots Classroom</td>
              </h5>
              <hr style={{ border: "2px solid black" }} />
              <h5 class="card-title awardTableRow02">
                <td className="awardTableTd021">Parents' Choice Award</td>
                <td className="awardTableTd022">Storybots Classroom</td>
              </h5>
            </div>
          </div>
        </div>

        <br />
        <div className="awardC03">
          <div className="awardSpeechb03">
            <div class="card-body" style={{ padding: "4% 5%" }}>
              <h5 class="card-title awardTableRow03">
                <td className="awardTableTd031">Parents' Choice Award</td>
                <td className="awardTableTd032">Ely Flying Explorer app</td>
              </h5>
              <hr style={{ border: "2px solid black" }} />
              <h5 class="card-title awardTableRow03">
                <td className="awardTableTd031">ECGBL: first prize</td>
                <td className="awardTableTd032">Ely Flying Explorer app</td>
              </h5>
            </div>
          </div>
        </div>

        <br />
        <div className="awardC04">
          <div className="awardSpeechb04">
            <div class="card-body" style={{ padding: "4% 5%" }}>
              <h5 class="card-title awardTableRow04">
                <td className="awardTableTd041">
                  Unicredit Appathon: First Prize
                </td>
                <td className="awardTableTd042">Hatly app</td>
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
