import React from "react";

const Awards = () => {
  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        border: "2px solid black",
        background: "#d661ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="row">
        <div
          className="col-12"
          style={{
            textAlign: "center",
            display: "flex",
          }}
        >
          <img
            src="/assets/images/medal.png"
            alt="Contact Us"
            height="250px"
            width="350px"
          />
          <h1
            style={{
              fontSize: "110px",
              fontWeight: "900",
              color: "black",
              paddingTop: "95px",
            }}
          >
            {" "}
            AWARDS
          </h1>
        </div>
      </div>
      <div style={{ width: "80%" }}>
        <br />

        <div
          style={{
            border: "2px solid black",
            borderRadius: "35px",
            background: "white",
            padding: "35px 100px 15px 100px",
          }}
        >
          <table
            class="table"
            style={{
              background: "white",
              fontSize: "28px",
              fontWeight: "400",
            }}
          >
            <thead>
              <tr style={{ borderColor: "black" }}>
                <td style={{ padding: "10px 0px 20px 0px" }}>
                  CSSDA Website Of The Day
                </td>
                <td style={{ padding: "10px 0px 20px 0px" }}>This website</td>
              </tr>
            </thead>
            <thead>
              <tr style={{ borderColor: "black" }}>
                <td style={{ padding: "10px 0px 20px 0px" }}>
                  Awwwards Honorable Mention
                </td>
                <td style={{ padding: "10px 0px 20px 0px" }}>This website</td>
              </tr>
            </thead>
            <thead>
              <tr style={{ borderColor: "black" }}>
                <td style={{ padding: "10px 0px 20px 0px" }}>
                  CSSDA UI + UX + Innovation Awards
                </td>
                <td style={{ padding: "10px 0px 20px 0px" }}>This website</td>
              </tr>
            </thead>
          </table>
        </div>

        <br />
        <div
          style={{
            border: "2px solid black",
            borderRadius: "35px",
            background: "white",
            padding: "35px 100px 15px 100px",
          }}
        >
          <table
            class="table"
            style={{
              background: "white",
              fontSize: "28px",
              fontWeight: "400",
            }}
          >
            <thead>
              <tr style={{ borderColor: "black" }}>
                <td style={{ padding: "10px 0px 20px 0px" }}>
                  Emmy Award for “Outstanding Interactive”
                </td>
                <td style={{ padding: "10px 0px 20px 0px" }}>
                  Storybots apps and web
                </td>
              </tr>
            </thead>
            <thead>
              <tr style={{ borderColor: "black" }}>
                <td style={{ padding: "10px 0px 20px 0px" }}>
                  Webby Award honoree
                </td>
                <td style={{ padding: "10px 0px 20px 0px" }}>storybots.com</td>
              </tr>
            </thead>
            <thead>
              <tr style={{ borderColor: "black" }}>
                <td style={{ padding: "10px 0px 20px 0px" }}>
                  Teachers' Choice Award
                </td>
                <td style={{ padding: "10px 0px 20px 0px" }}>
                  Storybots Classroom
                </td>
              </tr>
            </thead>
            <thead>
              <tr style={{ borderColor: "black" }}>
                <td style={{ padding: "10px 0px 20px 0px" }}>
                  Parents' Choice Award
                </td>
                <td style={{ padding: "10px 0px 20px 0px" }}>
                  Storybots Classroom
                </td>
              </tr>
            </thead>
          </table>
        </div>

        <br />
        <div
          style={{
            border: "2px solid black",
            borderRadius: "35px",
            background: "white",
            padding: "35px 100px 15px 100px",
          }}
        >
          <table
            class="table"
            style={{
              background: "white",
              fontSize: "28px",
              fontWeight: "400",
            }}
          >
            <thead>
              <tr style={{ borderColor: "black" }}>
                <td style={{ padding: "10px 0px 20px 0px" }}>
                  Parents' Choice Award
                </td>
                <td style={{ padding: "10px 0px 20px 0px" }}>
                  Ely Flying Explorer app
                </td>
              </tr>
            </thead>
            <thead>
              <tr style={{ borderColor: "black" }}>
                <td style={{ padding: "10px 0px 20px 0px" }}>
                  ECGBL: first prize
                </td>
                <td style={{ padding: "10px 0px 20px 0px" }}>
                  Ely Flying Explorer app
                </td>
              </tr>
            </thead>
          </table>
        </div>

        <br />
        <div
          style={{
            border: "2px solid black",
            borderRadius: "35px",
            background: "white",
            padding: "35px 100px 15px 100px",
          }}
        >
          <table
            class="table"
            style={{
              background: "white",
              fontSize: "28px",
              fontWeight: "400",
            }}
          >
            <thead>
              <tr style={{ borderColor: "black" }}>
                <td style={{ padding: "10px 0px 20px 0px" }}>
                  Unicredit Appathon: First Prize
                </td>
                <td style={{ padding: "10px 0px 20px 0px" }}>Hatly app</td>
              </tr>
            </thead>
          </table>
        </div>

        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Awards;
