// import React from "react";
// // import Carousel from "react-elastic-carousel";
// // import Item from "./ItemArrival";
// import "./NewArrival.css";

// const NewArrival = () => {
//   const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 550, itemsToShow: 2 },
//     { width: 768, itemsToShow: 4 },
//     // { width: 1200, itemsToShow: 4 },
//   ];
//   return (
//     // <>
//     // <div className="newArrbookBestSellers00">
//     //   <div className="newArrbookBestSellers01">
//     //     <h1 className="newArrbookBestSellers0101">New Arrival</h1>
//     //   </div>

//     //     <Carousel
//     //       breakPoints={breakPoints}
//     //       className="newArrbookBestSellers00CarouselDiv"
//     //     >
//     //       <Item>
//     //         {" "}
//     //         {/* <i class="fa fa-plus-circle bookBestSellers00AddIcon"></i> */}
//     //         {/* <img
//     //           src="/assets/images/client.webp"
//     //           alt="Logo"
//     //           width="150"
//     //           height="150"
//     //           class="d-inline-block align-text-top bookBestSellers00TeamImg"
//     //         /> */}
//     //         <h3 className="newArrbookBestSellers00TeamImgH3">NEW LAUNCH</h3>
//     //         <h6 className="newArrbookBestSellers00TeamImgH6">
//     //           Indian Red Flag
//     //         </h6>
//     //       </Item>
//     //       <Item>
//     //         {" "}
//     //         {/* <i class="fa fa-plus-circle bookBestSellers00AddIcon"></i> */}
//     //         {/* <img
//     //           src="/assets/images/client.webp"
//     //           alt="Logo"
//     //           width="150"
//     //           height="150"
//     //           class="d-inline-block align-text-top bookBestSellers00TeamImg"
//     //         /> */}
//     //         <h3 className="newArrbookBestSellers00TeamImgH3">NEW LAUNCH</h3>
//     //         <h6 className="newArrbookBestSellers00TeamImgH6">
//     //           Indian Red Flag
//     //         </h6>
//     //       </Item>
//     //       <Item>
//     //         {" "}
//     //         {/* <i class="fa fa-plus-circle bookBestSellers00AddIcon"></i> */}
//     //         {/* <img
//     //           src="/assets/images/client.webp"
//     //           alt="Logo"
//     //           width="150"
//     //           height="150"
//     //           class="d-inline-block align-text-top bookBestSellers00TeamImg"
//     //         /> */}
//     //         <h3 className="newArrbookBestSellers00TeamImgH3">NEW LAUNCH</h3>
//     //         <h6 className="newArrbookBestSellers00TeamImgH6">
//     //           Indian Red Flag
//     //         </h6>
//     //       </Item>
//     //       <Item>
//     //         {" "}
//     //         {/* <i class="fa fa-plus-circle bookBestSellers00AddIcon"></i> */}
//     //         {/* <img
//     //           src="/assets/images/client.webp"
//     //           alt="Logo"
//     //           width="150"
//     //           height="150"
//     //           class="d-inline-block align-text-top bookBestSellers00TeamImg"
//     //         /> */}
//     //         <h3 className="newArrbookBestSellers00TeamImgH3">NEW LAUNCH</h3>
//     //         <h6 className="newArrbookBestSellers00TeamImgH6">
//     //           Indian Red Flag
//     //         </h6>
//     //       </Item>
//     //       <Item>
//     //         {" "}
//     //         {/* <i class="fa fa-plus-circle bookBestSellers00AddIcon"></i> */}
//     //         {/* <img
//     //           src="/assets/images/client.webp"
//     //           alt="Logo"
//     //           width="150"
//     //           height="150"
//     //           class="d-inline-block align-text-top bookBestSellers00TeamImg"
//     //         /> */}
//     //         <h3 className="newArrbookBestSellers00TeamImgH3">NEW LAUNCH</h3>
//     //         <h6 className="newArrbookBestSellers00TeamImgH6">
//     //           Indian Red Flag
//     //         </h6>
//     //       </Item>
//     //       <Item>
//     //         {" "}
//     //         {/* <i class="fa fa-plus-circle bookBestSellers00AddIcon"></i> */}
//     //         {/* <img
//     //           src="/assets/images/client.webp"
//     //           alt="Logo"
//     //           width="150"
//     //           height="150"
//     //           class="d-inline-block align-text-top bookBestSellers00TeamImg"
//     //         /> */}
//     //         <h3 className="newArrbookBestSellers00TeamImgH3">NEW LAUNCH</h3>
//     //         <h6 className="newArrbookBestSellers00TeamImgH6">
//     //           Indian Red Flag
//     //         </h6>
//     //       </Item>
//     //     </Carousel>
//     // </div>
//     // </>

//     <>
//       <div className="newArrbookBestSellers00">
//         <div className="newArrbookBestSellers01">
//           <h1 className="newArrbookBestSellers0101">New Arrival</h1>
//         </div>
//         <div
//           id="carouselExampleAutoplaying"
//           class="carousel slide newArrbookBestImg"
//           data-bs-ride="carousel"
//         >
//           <div class="carousel-inner">
//             <div class="carousel-item active">
//               <img
//                 src="/assets/images/blogImg03.jpg"
//                 class="d-block w-100 newArrbookBestImgmain"
//                 alt="blogImg01"
//               />
//               <div className="newArrbookBestImginText">
//                 <div>
//                   <h3>NEW LAUNCH</h3>
//                   <h1>Indian Red Blag</h1>
//                 </div>
//                 <div className="newArrbookBestImginbutton">
//                   <button className="btn btn-success newArrbookinbutton">
//                     BUY NOW
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div class="carousel-item">
//               <img
//                 src="/assets/images/blogImg02.jpg"
//                 class="d-block w-100 newArrbookBestImgmain"
//                 alt="blogImg02"
//               />
//               <div className="newArrbookBestImginText">
//                 <div>
//                   <h3>NEW LAUNCH</h3>
//                   <h1>Indian Red Blag</h1>
//                 </div>
//                 <div className="newArrbookBestImginbutton">
//                   <button className="btn btn-success newArrbookinbutton">
//                     BUY NOW
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div class="carousel-item">
//               <img
//                 src="/assets/images/blogImg03.jpg"
//                 class="d-block w-100 newArrbookBestImgmain"
//                 alt="blogImg03"
//               />
//               <div className="newArrbookBestImginText">
//                 <div>
//                   <h3>NEW LAUNCH</h3>
//                   <h1>Indian Red Blag</h1>
//                 </div>
//                 <div className="newArrbookBestImginbutton">
//                   <button className="btn btn-success newArrbookinbutton">
//                     BUY NOW
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <button
//             class="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselExampleAutoplaying"
//             data-bs-slide="prev"
//           >
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Previous</span>
//           </button>
//           <button
//             class="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselExampleAutoplaying"
//             data-bs-slide="next"
//           >
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NewArrival;

import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
// import Item from "./Item";
// import "./Team.css";
import "./NewArrival.css";
import Item from "./ItemArrival";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const NewArrival = () => {
  const reveal = () => {
    const reveals = document.querySelectorAll(".teamReveals");
    const revealpoint = 100; // You can adjust this value based on your requirements

    for (let i = 0; i < reveals.length; i++) {
      const windowheight = window.innerHeight;
      const revealtop = reveals[i].getBoundingClientRect().top;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);
  return (
    <div style={{ border: "2px solid black" }} className="teamTopOneDiv">
      <div className="secondApp teamReveals">
        <div className="secondteam01">
          <h1 className="secondteam0101">New Arrival</h1>
        </div>
        {/* <div className="teamText">
          <h1 className="teamTextH1" style={{ textAlign: "center" }}>
            Meet The Team
          </h1>
        </div> */}
        <div className="secondteam-container">
          <div className="container secondin-container">
            <div className="secondslide-container">
              {/* <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <div className="secondSlideOneImg">
                    <img
                      src="/assets/images/book.png"
                      alt="Logo"
                      width="150"
                      height="150"
                      class="d-inline-block align-text-top secondteamImg"
                    />
                  </div>
                  <div className="secondSlidesecondText">
                    <div className="secondSlidesecondTextone">
                      <h3 className="secondteamImgH3">Suhas M</h3>
                      <h6 className="secondteamImgH6">Chief Storyteller</h6>
                      <button className="secondteamImgButton">button</button>
                    </div>
                  </div>
                </div>
              </Item> */}
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <div className="secondSlideOneImg">
                    <img
                      src="/assets/images/book.png"
                      alt="Logo"
                      width="150"
                      height="150"
                      class="d-inline-block secondteamImg"
                    />
                  </div>
                  <div className="secondSlidesecondText">
                    <h3 className="secondteamImgH3">Suhas M</h3>
                    <h6 className="secondteamImgH6">Chief Storyteller</h6>
                    <button className="btn btn-success secondteamImgButton">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </Item>

              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <div className="secondSlideOneImg">
                    <img
                      src="/assets/images/book.png"
                      alt="Logo"
                      width="150"
                      height="150"
                      class="d-inline-block secondteamImg"
                    />
                  </div>
                  <div className="secondSlidesecondText">
                    <h3 className="secondteamImgH3">Rammona M</h3>
                    <h6 className="secondteamImgH6">Executive Editor</h6>
                    <button className="btn btn-success secondteamImgButton">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <div className="secondSlideOneImg">
                    <img
                      src="/assets/images/book.png"
                      alt="Logo"
                      width="150"
                      height="150"
                      class="d-inline-block secondteamImg"
                    />
                  </div>
                  <div className="secondSlidesecondText">
                    <h3 className="secondteamImgH3">Namrata K</h3>
                    <h6 className="secondteamImgH6">Process Prodigy</h6>
                    <button className="btn btn-success secondteamImgButton">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <div className="secondSlideOneImg">
                    <img
                      src="/assets/images/book.png"
                      alt="Logo"
                      width="150"
                      height="150"
                      class="d-inline-block secondteamImg"
                    />
                  </div>
                  <div className="secondSlidesecondText">
                    <h3 className="secondteamImgH3">Shreya R</h3>
                    <h6 className="secondteamImgH6">Content Architect</h6>
                    <button className="btn btn-success secondteamImgButton">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <div className="secondSlideOneImg">
                    <img
                      src="/assets/images/book.png"
                      alt="Logo"
                      width="150"
                      height="150"
                      class="d-inline-block secondteamImg"
                    />
                  </div>
                  <div className="secondSlidesecondText">
                    <h3 className="secondteamImgH3">Poulami G</h3>
                    <h6 className="secondteamImgH6">Content Architect</h6>
                    <button className="btn btn-success secondteamImgButton">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <div className="secondSlideOneImg">
                    <img
                      src="/assets/images/book.png"
                      alt="Logo"
                      width="150"
                      height="150"
                      class="d-inline-block secondteamImg"
                    />
                  </div>
                  <div className="secondSlidesecondText">
                    <h3 className="secondteamImgH3">Harsh K</h3>
                    <h6 className="secondteamImgH6">Pixel Picasso</h6>
                    <button className="btn btn-success secondteamImgButton">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <div className="secondSlideOneImg">
                    <img
                      src="/assets/images/book.png"
                      alt="Logo"
                      width="150"
                      height="150"
                      class="d-inline-block secondteamImg"
                    />
                  </div>
                  <div className="secondSlidesecondText">
                    <h3 className="secondteamImgH3">Suhas M</h3>
                    <h6 className="secondteamImgH6">Chief Storyteller</h6>
                    <button className="btn btn-success secondteamImgButton">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <div className="secondSlideOneImg">
                    <img
                      src="/assets/images/book.png"
                      alt="Logo"
                      width="150"
                      height="150"
                      class="d-inline-block secondteamImg"
                    />
                  </div>
                  <div className="secondSlidesecondText">
                    <h3 className="secondteamImgH3">Rammona M</h3>
                    <h6 className="secondteamImgH6">Executive Editor</h6>
                    <button className="btn btn-success secondteamImgButton">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <div className="secondSlideOneImg">
                    <img
                      src="/assets/images/book.png"
                      alt="Logo"
                      width="150"
                      height="150"
                      class="d-inline-block secondteamImg"
                    />
                  </div>
                  <div className="secondSlidesecondText">
                    <h3 className="secondteamImgH3">Namrata K</h3>
                    <h6 className="secondteamImgH6">Process Prodigy</h6>
                    <button className="btn btn-success secondteamImgButton">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <div className="secondSlideOneImg">
                    <img
                      src="/assets/images/book.png"
                      alt="Logo"
                      width="150"
                      height="150"
                      class="d-inline-block secondteamImg"
                    />
                  </div>
                  <div className="secondSlidesecondText">
                    <h3 className="secondteamImgH3">Shreya R</h3>
                    <h6 className="secondteamImgH6">Content Architect</h6>
                    <button className="btn btn-success secondteamImgButton">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <div className="secondSlideOneImg">
                    <img
                      src="/assets/images/book.png"
                      alt="Logo"
                      width="150"
                      height="150"
                      class="d-inline-block secondteamImg"
                    />
                  </div>
                  <div className="secondSlidesecondText">
                    <h3 className="secondteamImgH3">Poulami G</h3>
                    <h6 className="secondteamImgH6">Content Architect</h6>
                    <button className="btn btn-success secondteamImgButton">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </Item>
              <Item className="secondslide-image">
                <div className="secondinSlideCard">
                  <div className="secondSlideOneImg">
                    <img
                      src="/assets/images/book.png"
                      alt="Logo"
                      width="150"
                      height="150"
                      class="d-inline-block secondteamImg"
                    />
                  </div>
                  <div className="secondSlidesecondText">
                    <h3 className="secondteamImgH3">Harsh K</h3>
                    <h6 className="secondteamImgH6">Pixel Picasso</h6>
                    <button className="btn btn-success secondteamImgButton">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </Item>
            </div>
          </div>
        </div>

        {/* <div className="teamCardDiv">
          <div className="teamCardDesktop teamReveals">
            <i class="fa fa-plus-circle addIcon" width="80px" height="80px"></i>

            <div className="imageCard">
              <img
                src="/assets/images/client.webp"
                alt="Logo"
                width="100"
                height="100"
                class="d-inline-block align-text-top teamImg"
              />
              <h3 className="teamImgH3">Suhas M</h3>
              <h6 className="teamImgH6">Chief Storyteller</h6>
            </div>
          </div>
          <div className="teamCardDesktop teamReveals">
            <i class="fa fa-plus-circle addIcon"></i>

            <div className="imageCard">
              <img
                src="/assets/images/client.webp"
                alt="Logo"
                width="100"
                height="100"
                class="d-inline-block align-text-top teamImg"
              />
              <h3 className="teamImgH3">Rammona M</h3>
              <h6 className="teamImgH6">Executive Editor</h6>
            </div>
          </div>
          <div className="teamCardDesktop teamReveals">
            <i class="fa fa-plus-circle addIcon"></i>

            <div className="imageCard">
              <img
                src="/assets/images/client.webp"
                alt="Logo"
                width="100"
                height="100"
                class="d-inline-block align-text-top teamImg"
              />
              <h3 className="teamImgH3">Namrata K</h3>
              <h6 className="teamImgH6">Process Prodigy</h6>
            </div>
          </div>
          <div className="teamCardDesktop teamReveals">
            <i class="fa fa-plus-circle addIcon"></i>

            <div className="imageCard">
              <img
                src="/assets/images/client.webp"
                alt="Logo"
                width="100"
                height="100"
                class="d-inline-block align-text-top teamImg"
              />
              <h3 className="teamImgH3">Shreya R</h3>
              <h6 className="teamImgH6">Content Architect</h6>
            </div>
          </div>
          <div className="teamCardDesktop teamReveals">
            <i class="fa fa-plus-circle addIcon"></i>

            <div className="imageCard">
              <img
                src="/assets/images/client.webp"
                alt="Logo"
                width="100"
                height="100"
                class="d-inline-block align-text-top teamImg"
              />
              <h3 className="teamImgH3">Poulami G</h3>
              <h6 className="teamImgH6">Content Architect</h6>
            </div>
          </div>
          <div className="teamCardDesktop teamReveals">
            <i class="fa fa-plus-circle addIcon"></i>
            <div className="imageCard">
              <img
                src="/assets/images/client.webp"
                alt="Logo"
                width="100"
                height="100"
                class="d-inline-block align-text-top teamImg"
              />
              <h3 className="teamImgH3">Harsh K</h3>
              <h6 className="teamImgH6">Pixel Picasso</h6>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default NewArrival;
