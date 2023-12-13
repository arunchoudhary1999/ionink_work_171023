import "./Magazine.css";
import { GalleryData } from "./GalleryData";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Magazine = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  const [tabTitle, setTabTitle] = useState(
    `${(document.title =
      "Magazine | Brands Out Loud: Forefront For Everything Business")}`
  );

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback);

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.titile))]);

    const handleBlur = () => {
      document.title = "Missing you already";
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
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [tabTitle]);

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.titile == itemData);
    setData(filterData);
  };

  return (
    <div
      style={{
        width: "100%",
        borderTop: "2px solid white",
        borderLeft: "2px solid black",
        borderRight: "2px solid black",
        borderBottom: "2px solid black",
        display: "flex",
        minHeight: "740px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      className="magzinesTop hidden"
    >
      <div className="magzineHeadingDiv">
        <h1 className="magzineHeading">Magzines</h1>
        {/* <div className="magzineHeadingNav">
          <ul class="nav justify-content-center magzineHeadingMainNav">
            <li className="nav-item magzineHeadingNavDivOne">
              <button
                className="magzineHeadingNavDivOneButton"
                onClick={() => setData(GalleryData)}
              >
                All
              </button>
            </li>
            {collection.map((item) => (
              <li class="magzineHeadingNavDivTwo">
                <button
                  className="magzineHeadingNavDivOneButton"
                  onClick={() => {
                    gallery_filter(item);
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div> */}
      </div>

      <div className="magazineMainDiv">
        <div class="card-deck magazineMainInnerDiv">
          {data.map((item) => (
            <div key={item.id} className="card magImgCardStyle">
              <img class="magImgStyle" src={item.image} alt="Card" />
              <div class="card-body">
                <h5 class="card-title">{item.h5}</h5>
                <h6>{item.h6}</h6>
                <a href="https://issuu.com/" class="card-text">
                  {item.link}
                </a>
                <p class="card-text">
                  <small class="text-muted">{item.p}</small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Magazine;
