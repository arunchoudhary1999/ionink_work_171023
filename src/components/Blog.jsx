import React, { useState, useEffect } from "react";
import "./Blog.css";
// import Login from "./Blogdemo/Login";
// import Register from "./Blogdemo/Register";
import Homeblog from "./Blogdemo/pages/homePage/HomeBlog";
// import Single from "./Blogdemo/Single";
// import Write from "./Blogdemo/BlogHome/Write";
// import Setting from "./Blogdemo/Setting";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Blog = () => {
  const [tabTitle, setTabTitle] = useState(
    `${(document.title =
      "Blog | Brands Out Loud: Forefront For Everything Business")}`
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

    // document.title = "Home | BOL";
    const handleBlur = () => {
      document.title = "Missing you already";
    };

    const handleFocus = () => {
      document.title = tabTitle;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    // window.addEventListener("scroll", reveal);

    return () => {
      // Cleanup event listeners when the component unmounts
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      hiddenElements.forEach((el) => observer.unobserve(el));
      // window.removeEventListener("scroll", reveal);
    };
  }, []);
  return (
    <div className="hidden">
      {/* <Homeblog /> */}
      {/* <Single /> */}
      {/* <Write /> */}
      {/* <Setting /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <Homeblog />
    </div>
  );
};

export default Blog;

// import { useState, useEffect } from "react";
// import "./Blog.css";
// import axios from "axios";

// const Blog = () => {
//   const reveal = () => {
//     const reveals = document.querySelectorAll(".blogReveals");
//     const revealpoint = 100;

//     for (let i = 0; i < reveals.length; i++) {
//       const windowheight = window.innerHeight;
//       const revealtop = reveals[i].getBoundingClientRect().top;

//       if (revealtop < windowheight - revealpoint) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   };

//   const [posts, setPosts] = useState([]);

//   const [tabTitle, setTabTitle] = useState(
//     `${(document.title =
//       "Blog | Brands Out Loud: Forefront For Everything Business")}`
//   );

//   useEffect(() => {
// const blogHandleAPI = () => {
//   axios
//     .get("https://api.wonderplots.com/api/user/blog/getAllBlogs", {})
//     .then((result) => {
//       console.log(result);
//       setPosts(result.data.blogs);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// blogHandleAPI();

//     const handleBlur = () => {
//       document.title = "😞 Missing you already";
//     };

//     const handleFocus = () => {
//       document.title = tabTitle;
//     };

//     window.addEventListener("blur", handleBlur);
//     window.addEventListener("focus", handleFocus);
//     window.addEventListener("scroll", reveal);

//     return () => {
//       window.removeEventListener("blur", handleBlur);
//       window.removeEventListener("focus", handleFocus);
//       window.removeEventListener("scroll", reveal);
//     };
//   }, [tabTitle]);

//   return (
//     <div>
//       <div
//         style={{
//           width: "100%",
//           border: "2px solid black",
//           display: "flex",
//           minHeight: "740px",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//         }}
//         className="blogTop01"
//       >
//         <div>
//           <h1 className="blogHeading01 blogReveals">Blog</h1>
//         </div>

//         <div className="blogContainer01 blogReveals">
//           <div class="mb-3 blogDivOne01">
//             {posts.length > 0 && (
//               <div key={posts.id} class="row no-gutters blogDivOne01Res">
//                 <div class="col-md-4 blogDivOneLeft01">
//                   <div class="card-body blogDivOneLeft02">
//                     <h5 class="card-title blogDivOneLeft02H5">
//                       {posts[0].description}
//                     </h5>
//                     <h1 className="blogDivOneLeft02H1">
//                       {posts[0].metaDescription}
//                     </h1>
//                     <p class="card-text blogDivOneLeft02P">{posts[0].tags}</p>
//                     <p class="card-text blogDivOneLeft02P1">
//                       <small class="text-muted">
//                         ZoxPress Staff 🕑 JANUARY 25, 2020
//                       </small>
//                     </p>
//                   </div>
//                 </div>
//                 <div class="col-md-8">
//                   <img src={posts[0].blogImage} class="card-img" alt="..." />
//                 </div>
//               </div>
//             )}

//             <hr className="blogDiv01Hr blogReveals" />
//           </div>
//         </div>
//         <div className="blogTwoMainDiv01 blogReveals">
//           <div class="card-deck blogTwoMainInnerDiv">
//             {posts.map((post) => (
//               <div key={post.id} class="blogTwoMainImgCardStyle">
//                 <img
//                   class="card-img-top blogTwoMainImgStyle"
//                   src={post.blogImage}
//                   alt="Card"
//                 />
//                 <div class="card-body blogTwoMainTextStyle">
//                   <h5 class="card-title blogTwoMainTextStyle2H5">
//                     {post.description}
//                   </h5>
//                   <h1 className="blogTwoMainTextStyleH1">
//                     {post.metaDescription}
//                   </h1>
//                   <p class="card-text blogTwoMainTextStyle2P">{post.tags}</p>
//                   <p class="card-text blogTwoMainTextStyleP1">
//                     <small class="text-muted">{post.createdAt}</small>
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;
