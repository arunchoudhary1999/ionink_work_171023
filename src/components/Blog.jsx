import { useState, useEffect } from "react";
import "./Blog.css";

const Blog = () => {
  const [tabTitle, setTabTitle] = useState(
    `${(document.title =
      "Blog | Brands Out Loud: Forefront For Everything Business")}`
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
  return (
    <div>
      <div
        style={{
          // height: "900px",
          width: "100%",
          border: "2px solid black",
          // background: "#ffcb46",
          display: "flex",
          minHeight: "740px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        className="blogTop01"
      >
        <div>
          <h1 className="blogHeading01">Blog</h1>
        </div>
        <div className="blogContainer01">
          <div class="mb-3 blogDivOne01">
            <div class="row no-gutters blogDivOne01Res">
              <div class="col-md-4 blogDivOneLeft01">
                <div class="card-body blogDivOneLeft02">
                  <h5 class="card-title blogDivOneLeft02H5">WORLD</h5>
                  <h1 className="blogDivOneLeft02H1">
                    New Report Finds Global Distrust
                  </h1>
                  <p class="card-text blogDivOneLeft02P">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora.
                  </p>
                  <p class="card-text blogDivOneLeft02P1">
                    <small class="text-muted">
                      ZoxPress Staff 🕑 JANUARY 25, 2020
                    </small>
                  </p>
                </div>
              </div>
              <div class="col-md-8">
                <img
                  src="/assets/images/blogImg01.jpg"
                  class="card-img"
                  alt="..."
                />
              </div>
            </div>
            <hr className="blogDiv01Hr" />
          </div>
        </div>
        <div className="blogTwoMainDiv01">
          <div class="card-deck blogTwoMainInnerDiv">
            <div class="blogTwoMainImgCardStyle">
              <img
                class="card-img-top blogTwoMainImgStyle"
                src="/assets/images/blogImg02.jpg"
                alt="Card"
              />
              <div class="card-body blogTwoMainTextStyle">
                <h5 class="card-title blogTwoMainTextStyle2H5">BUSINESS</h5>
                <h1 className="blogTwoMainTextStyleH1">
                  5 Things To Know Before The Stock Market Opens Tuesday
                </h1>
                <p class="card-text blogTwoMainTextStyle2P">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur, vel illum qui
                  dolorem eum fugiat.
                </p>
                <p class="card-text blogTwoMainTextStyleP1">
                  <small class="text-muted">
                    ZoxPress Staff 🕑 JANUARY 25, 2020
                  </small>
                </p>
              </div>
            </div>
            <div class="blogTwoMainImgCardStyle">
              <img
                class="card-img-top blogTwoMainImgStyle"
                src="/assets/images/blogImg03.jpg"
                alt="Card"
              />
              <div class="card-body blogTwoMainTextStyle">
                <h5 class="card-title blogTwoMainTextStyle2H5">BUSINESS</h5>
                <h1 className="blogTwoMainTextStyleH1">
                  5 Things To Know Before The Stock Market Opens Tuesday
                </h1>
                <p class="card-text blogTwoMainTextStyle2P">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur, vel illum qui
                  dolorem eum fugiat.
                </p>
                <p class="card-text blogTwoMainTextStyleP1">
                  <small class="text-muted">
                    ZoxPress Staff 🕑 JANUARY 25, 2020
                  </small>
                </p>
              </div>
            </div>
            <div class="blogTwoMainImgCardStyle">
              <img
                class="card-img-top blogTwoMainImgStyle"
                src="/assets/images/blogImg04.jpg"
                alt="Card"
              />
              <div class="card-body blogTwoMainTextStyle">
                <h5 class="card-title blogTwoMainTextStyle2H5">BUSINESS</h5>
                <h1 className="blogTwoMainTextStyleH1">
                  5 Things To Know Before The Stock Market Opens Tuesday
                </h1>
                <p class="card-text blogTwoMainTextStyle2P">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur, vel illum qui
                  dolorem eum fugiat.
                </p>
                <p class="card-text blogTwoMainTextStyleP1">
                  <small class="text-muted">
                    ZoxPress Staff 🕑 JANUARY 25, 2020
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
