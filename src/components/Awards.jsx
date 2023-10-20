import React from "react";
import './Award.css';

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
    >
      <div className="row">
        <div
          className="col-6"
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
              paddingTop: "25%",
            }}
          >
            {" "}
            AWARDS
          </h1>
        </div>
      </div>
      <div className="award-part-1" >
        <br />

         
          <table
            class="table-1"
             
          >
            <thead>
              <tr  >
                <td  >
                  CSSDA Website Of The Day
                </td>
                <td  >This website</td>
              </tr>
            </thead>
            <thead>
              <tr  >
                <td  >
                  Awwwards Honorable Mention
                </td>
                <td  >This website</td>
              </tr>
            </thead>
            <thead>
              <tr  >
                <td  >
                  CSSDA UI + UX + Innovation Awards
                </td>
                <td  >This website</td>
              </tr>
            </thead>
          </table>
        

        <br />
        <div 
        className="award-part-1"
        >
          <table
            class="table-1"
            
          >
            <thead>
              <tr  >
                <td  >
                  Emmy Award for “Outstanding Interactive”
                </td>
                <td  >
                  Storybots apps and web
                </td>
              </tr>
            </thead>
            <thead>
              <tr  >
                <td  >
                  Webby Award honoree
                </td>
                <td  >storybots.com</td>
              </tr>
            </thead>
            <thead>
              <tr  >
                <td  >
                  Teachers' Choice Award
                </td>
                <td  >
                  Storybots Classroom
                </td>
              </tr>
            </thead>
            <thead>
              <tr  >
                <td  >
                  Parents' Choice Award
                </td>
                <td  >
                  Storybots Classroom
                </td>
              </tr>
            </thead>
          </table>
        </div>

        <br />
        <div
        className="award-part-1"
          
        >
          <table
            class="table-1"
            
          >
            <thead>
              <tr  >
                <td  >
                  Parents' Choice Award
                </td>
                <td  >
                  Ely Flying Explorer app
                </td>
              </tr>
            </thead>
            <thead>
              <tr  >
                <td  >
                  ECGBL: first prize
                </td>
                <td  >
                  Ely Flying Explorer app
                </td>
              </tr>
            </thead>
          </table>
        </div>

        <br />
        <div
          className="award-part-1"
        >
          <table
            class="table-1"
            
          >
            <thead>
              <tr  >
                <td  >
                  Unicredit Appathon: First Prize
                </td>
                <td  >Hatly app</td>
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
