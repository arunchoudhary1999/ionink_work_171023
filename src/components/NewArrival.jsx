import React from "react";
// import Carousel from "react-elastic-carousel";
// import Item from "./ItemArrival";
import "./NewArrival.css";

const NewArrival = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    // { width: 1200, itemsToShow: 4 },
  ];
  return (
    // <>
    // <div className="newArrbookBestSellers00">
    //   <div className="newArrbookBestSellers01">
    //     <h1 className="newArrbookBestSellers0101">New Arrival</h1>
    //   </div>

    //     <Carousel
    //       breakPoints={breakPoints}
    //       className="newArrbookBestSellers00CarouselDiv"
    //     >
    //       <Item>
    //         {" "}
    //         {/* <i class="fa fa-plus-circle bookBestSellers00AddIcon"></i> */}
    //         {/* <img
    //           src="/assets/images/client.webp"
    //           alt="Logo"
    //           width="150"
    //           height="150"
    //           class="d-inline-block align-text-top bookBestSellers00TeamImg"
    //         /> */}
    //         <h3 className="newArrbookBestSellers00TeamImgH3">NEW LAUNCH</h3>
    //         <h6 className="newArrbookBestSellers00TeamImgH6">
    //           Indian Red Flag
    //         </h6>
    //       </Item>
    //       <Item>
    //         {" "}
    //         {/* <i class="fa fa-plus-circle bookBestSellers00AddIcon"></i> */}
    //         {/* <img
    //           src="/assets/images/client.webp"
    //           alt="Logo"
    //           width="150"
    //           height="150"
    //           class="d-inline-block align-text-top bookBestSellers00TeamImg"
    //         /> */}
    //         <h3 className="newArrbookBestSellers00TeamImgH3">NEW LAUNCH</h3>
    //         <h6 className="newArrbookBestSellers00TeamImgH6">
    //           Indian Red Flag
    //         </h6>
    //       </Item>
    //       <Item>
    //         {" "}
    //         {/* <i class="fa fa-plus-circle bookBestSellers00AddIcon"></i> */}
    //         {/* <img
    //           src="/assets/images/client.webp"
    //           alt="Logo"
    //           width="150"
    //           height="150"
    //           class="d-inline-block align-text-top bookBestSellers00TeamImg"
    //         /> */}
    //         <h3 className="newArrbookBestSellers00TeamImgH3">NEW LAUNCH</h3>
    //         <h6 className="newArrbookBestSellers00TeamImgH6">
    //           Indian Red Flag
    //         </h6>
    //       </Item>
    //       <Item>
    //         {" "}
    //         {/* <i class="fa fa-plus-circle bookBestSellers00AddIcon"></i> */}
    //         {/* <img
    //           src="/assets/images/client.webp"
    //           alt="Logo"
    //           width="150"
    //           height="150"
    //           class="d-inline-block align-text-top bookBestSellers00TeamImg"
    //         /> */}
    //         <h3 className="newArrbookBestSellers00TeamImgH3">NEW LAUNCH</h3>
    //         <h6 className="newArrbookBestSellers00TeamImgH6">
    //           Indian Red Flag
    //         </h6>
    //       </Item>
    //       <Item>
    //         {" "}
    //         {/* <i class="fa fa-plus-circle bookBestSellers00AddIcon"></i> */}
    //         {/* <img
    //           src="/assets/images/client.webp"
    //           alt="Logo"
    //           width="150"
    //           height="150"
    //           class="d-inline-block align-text-top bookBestSellers00TeamImg"
    //         /> */}
    //         <h3 className="newArrbookBestSellers00TeamImgH3">NEW LAUNCH</h3>
    //         <h6 className="newArrbookBestSellers00TeamImgH6">
    //           Indian Red Flag
    //         </h6>
    //       </Item>
    //       <Item>
    //         {" "}
    //         {/* <i class="fa fa-plus-circle bookBestSellers00AddIcon"></i> */}
    //         {/* <img
    //           src="/assets/images/client.webp"
    //           alt="Logo"
    //           width="150"
    //           height="150"
    //           class="d-inline-block align-text-top bookBestSellers00TeamImg"
    //         /> */}
    //         <h3 className="newArrbookBestSellers00TeamImgH3">NEW LAUNCH</h3>
    //         <h6 className="newArrbookBestSellers00TeamImgH6">
    //           Indian Red Flag
    //         </h6>
    //       </Item>
    //     </Carousel>
    // </div>
    // </>

    <>
      <div className="newArrbookBestSellers00">
        <div className="newArrbookBestSellers01">
          <h1 className="newArrbookBestSellers0101">New Arrival</h1>
        </div>
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide newArrbookBestImg"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="/assets/images/blogImg03.jpg"
                class="d-block w-100 newArrbookBestImgmain"
                alt="blogImg01"
              />
              <div className="newArrbookBestImginText">
                <div>
                  <h3>NEW LAUNCH</h3>
                  <h1>Indian Red Blag</h1>
                </div>
                <div className="newArrbookBestImginbutton">
                  <button className="btn btn-success newArrbookinbutton">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="/assets/images/blogImg02.jpg"
                class="d-block w-100 newArrbookBestImgmain"
                alt="blogImg02"
              />
              <div className="newArrbookBestImginText">
                <div>
                  <h3>NEW LAUNCH</h3>
                  <h1>Indian Red Blag</h1>
                </div>
                <div className="newArrbookBestImginbutton">
                  <button className="btn btn-success newArrbookinbutton">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="/assets/images/blogImg03.jpg"
                class="d-block w-100 newArrbookBestImgmain"
                alt="blogImg03"
              />
              <div className="newArrbookBestImginText">
                <div>
                  <h3>NEW LAUNCH</h3>
                  <h1>Indian Red Blag</h1>
                </div>
                <div className="newArrbookBestImginbutton">
                  <button className="btn btn-success newArrbookinbutton">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
