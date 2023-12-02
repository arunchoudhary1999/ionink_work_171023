import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./ItemSellers";
import "./BestSellers.css";

const BestSellers = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    // { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <div className="bookBestSellers00">
        <div className="bookBestSellers01">
          <h1 className="bookBestSellers0101">Best Sellers</h1>
        </div>

        <Carousel
          breakPoints={breakPoints}
          className="bookBestSellers00CarouselDiv"
        >
          <Item>
            {" "}
            {/* <i class="fa fa-plus-circle bookBestSellers00AddIcon"></i> */}
            {/* <img
              src="/assets/images/client.webp"
              alt="Logo"
              width="150"
              height="150"
              class="d-inline-block align-text-top bookBestSellers00TeamImg"
            /> */}
            <h3 className="bookBestSellers00TeamImgH3">NEW LAUNCH</h3>
            <h6 className="bookBestSellers00TeamImgH6">Indian Red Flag</h6>
          </Item>
          <Item>
            {" "}
            {/* <i class="fa fa-plus-circle bookBestSellers00AddIcon"></i> */}
            {/* <img
              src="/assets/images/client.webp"
              alt="Logo"
              width="150"
              height="150"
              class="d-inline-block align-text-top bookBestSellers00TeamImg"
            /> */}
            <h3 className="bookBestSellers00TeamImgH3">NEW LAUNCH</h3>
            <h6 className="bookBestSellers00TeamImgH6">Indian Red Flag</h6>
          </Item>
          <Item>
            {" "}
            {/* <i class="fa fa-plus-circle bookBestSellers00AddIcon"></i> */}
            {/* <img
              src="/assets/images/client.webp"
              alt="Logo"
              width="150"
              height="150"
              class="d-inline-block align-text-top bookBestSellers00TeamImg"
            /> */}
            <h3 className="bookBestSellers00TeamImgH3">NEW LAUNCH</h3>
            <h6 className="bookBestSellers00TeamImgH6">Indian Red Flag</h6>
          </Item>
          <Item>
            {" "}
            {/* <i class="fa fa-plus-circle bookBestSellers00AddIcon"></i> */}
            {/* <img
              src="/assets/images/client.webp"
              alt="Logo"
              width="150"
              height="150"
              class="d-inline-block align-text-top bookBestSellers00TeamImg"
            /> */}
            <h3 className="bookBestSellers00TeamImgH3">NEW LAUNCH</h3>
            <h6 className="bookBestSellers00TeamImgH6">Indian Red Flag</h6>
          </Item>
          <Item>
            {" "}
            {/* <i class="fa fa-plus-circle bookBestSellers00AddIcon"></i> */}
            {/* <img
              src="/assets/images/client.webp"
              alt="Logo"
              width="150"
              height="150"
              class="d-inline-block align-text-top bookBestSellers00TeamImg"
            /> */}
            <h3 className="bookBestSellers00TeamImgH3">NEW LAUNCH</h3>
            <h6 className="bookBestSellers00TeamImgH6">Indian Red Flag</h6>
          </Item>
          <Item>
            {" "}
            {/* <i class="fa fa-plus-circle bookBestSellers00AddIcon"></i> */}
            {/* <img
              src="/assets/images/client.webp"
              alt="Logo"
              width="150"
              height="150"
              class="d-inline-block align-text-top bookBestSellers00TeamImg"
            /> */}
            <h3 className="bookBestSellers00TeamImgH3">NEW LAUNCH</h3>
            <h6 className="bookBestSellers00TeamImgH6">Indian Red Flag</h6>
          </Item>
        </Carousel>
      </div>
    </>
  );
};

export default BestSellers;
