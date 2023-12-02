import React from "react";
import "./FeaturesAuthors.css";

const FeaturesAuthors = () => {
  return (
    <div className="container featuresAuthors00">
      <h1 className="featuresAuthors00H1">Featured Authors</h1>
      {/* <img src="/assets/images/blogImg04.jpg" class="img-fluid" alt="..."></img> */}
      <div class="card-group featuresAuthors01">
        <div class="featuresAuthors02">
          <img
            src="/assets/images/booksLogo.png"
            class="card-img-top featuresAuthors00Img"
            alt="features"
          />
          <div class="card-body featuresAuthorsh5">
            <h5 class="card-title">Name of Authors</h5>
          </div>
        </div>
        <div class="featuresAuthors03">
          <img
            src="/assets/images/booksLogo.png"
            class="card-img-top featuresAuthors00Img"
            alt="features"
          />
          <div class="card-body featuresAuthorsh5">
            <h5 class="card-title">Name of Authors</h5>
          </div>
        </div>
        <div class="featuresAuthors04">
          <img
            src="/assets/images/booksLogo.png"
            class="card-img-top featuresAuthors00Img"
            alt="features"
          />
          <div class="card-body featuresAuthorsh5">
            <h5 class="card-title">Name of Authors</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAuthors;
