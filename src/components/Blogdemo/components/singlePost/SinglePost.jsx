// import { Link } from "react-router-dom";
// import "./SinglePost.css";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import React, { useState, useEffect } from "react";

// export default function SinglePost() {
//   const location = useLocation();
//   // console.log(location.pathname.split("/")[3]);
//   const path = location.pathname.split("/")[3];
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const blogHandleAPI = () => {
//       axios
//         .get("https://bol-9joj.onrender.com/user/blogs/" + path, {})
//         .then((result) => {
//           console.log(result);
//           setPosts(result.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     };

//     blogHandleAPI();
//   }, [path]);

//   return (
//     <div className="singlePost">
//       <div className="singlePostWrapper">
//         <img className="singlePostImg" src={posts.blogImage} alt="" />
//         <h1 className="singlePostTitle">
//           {posts.tittle}
//           <div className="singlePostEdit">
//             <i className="singlePostIcon fa fa-edit"></i>
//             <i className="singlePostIcon fa fa-trash"></i>
//           </div>
//         </h1>
//         <div className="singlePostInfo">
//           <span>
//             Author:
//             <b className="singlePostAuthor">
//               <Link className="link" to="/blog">
//                 {posts.description}
//               </Link>
//             </b>
//           </span>
//           <span>{posts.createdAt}</span>
//         </div>
//         <p className="singlePostDesc">{posts.metaDescription}</p>
//       </div>
//     </div>
//   );
// }

import { Link, useHistory } from "react-router-dom";
import "./SinglePost.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function SinglePost() {
  const location = useLocation();
  const history = useHistory();
  const path = location.pathname.split("/")[3];
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const blogHandleAPI = () => {
      axios
        .get("https://bol-9joj.onrender.com/user/blogs/" + path, {})
        .then((result) => {
          console.log(result);
          setPosts(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    blogHandleAPI();
  }, [path]);

  const handleDelete = () => {
    // Make a DELETE request to delete the post
    axios
      .delete("https://bol-9joj.onrender.com/user/blogs/" + path)
      .then(() => {
        // Redirect to the blog page after successful deletion
        history.push("/blog");
      })
      .catch((error) => {
        console.log("Error deleting post:", error);
      });
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={posts.blogImage} alt="" />
        <h1 className="singlePostTitle">
          {posts.tittle}
          <div className="singlePostEdit">
            <Link className="singlePostIcon" to={`/blog/editPost/${posts._id}`}>
              {" "}
              <i className="fa fa-edit"></i>
            </Link>

            <i
              className="singlePostIcon fa fa-trash"
              onClick={handleDelete}
            ></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            {/* Author: */}
            <b className="singlePostAuthor">
              <Link className="link" to="/blog">
                {posts.description}
              </Link>
            </b>
          </span>
          <span>{posts.createdAt}</span>
        </div>
        <p className="singlePostDesc">{posts.metaDescription}</p>
      </div>
    </div>
  );
}
