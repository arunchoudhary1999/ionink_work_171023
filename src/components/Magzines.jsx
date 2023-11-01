import React from "react";
import "./Magzines.css";

const Magzines = () => {
  return (
    <div
      style={{
        // height: "900px",
        width: "100%",
        border: "2px solid black",
        // background: "#ffcb46",
        display: "flex",
        minHeight: "740px",
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      className="magzinesTop"
    >
      <div>
        <h1 className="magzineHeading">Magzines</h1>
      </div>
      <div className="magzinesDiv">
        <div className="magzineDivCard">
          <div class="text-center magzinesOneDiv">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Drag & Drop</h5>
              <p class="card-text">OR</p>
              <a
                href="https://issuu.com/"
                target="_parent"
                class="btn btn-primary"
              >
                Link Here...
              </a>
            </div>
            <div class="card-footer text-muted">Check Now</div>
          </div>
        </div>
        {/* <div className="magzineDivCard">
          <div class="text-center magzinesOneDiv">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Drag & Drop</h5>
              <p class="card-text">OR</p>
              <a
                href="https://issuu.com/"
                target="_parent"
                class="btn btn-primary"
              >
                Link Here...
              </a>
            </div>
            <div class="card-footer text-muted">2 days ago</div>
          </div>
        </div> */}

        {/* <div className="magzineDivCard">
          <div class="text-center magzinesOneDiv">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Drag & Drop</h5>
              <p class="card-text">OR</p>
              <a
                href="https://issuu.com/"
                target="_parent"
                class="btn btn-primary"
              >
                Link Here...
              </a>
            </div>
            <div class="card-footer text-muted">3 days ago</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Magzines;
