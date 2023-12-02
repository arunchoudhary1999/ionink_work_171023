import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./EditPost.css";

export default function SinglePost() {
  const history = useHistory();
  const path = window.location.pathname.split("/")[3];
  const [post, setPost] = useState({
    blogImage: "Default blogImage",
    tittle: "Default Title",
    description: "Default Description",
    createdAt: "",
    metaDescription: "Default Meta Description",
  });
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://bol-9joj.onrender.com/user/blogs/${path}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [path]);

  const handlePublish = () => {
    axios
      .put(`https://bol-9joj.onrender.com/user/blogs/${path}`, post)
      .then(() => {
        // Handle successful update
        console.log("Post updated successfully!");
        history.push("/blog");
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  return (
    // <div className="write">
    //   <div className="singlePostWrapper">
    //     <img className="writeImg" src={post.blogImage} alt="" />
    //     <h1 className="writeFormGroup">
    //       <div className="singlePostInfo">
    //         <span>
    //           Tittle:
    //           <b className="singlePostAuthor">
    //             <input
    //               className="writeInput"
    //               value={post.tittle}
    //               name="tittle"
    //               onChange={handleChange}
    //             />
    //           </b>
    //         </span>
    //       </div>
    //       <div className="singlePostEdit">
    //         <button className="singlePostIcon" onClick={handlePublish}>
    //           Publish
    //         </button>
    //       </div>
    //     </h1>
    //     <div className="singlePostInfo">
    //       <span>
    //         Description:
    //         <b className="singlePostAuthor">
    //           <input
    //             className="singlePostDesc"
    //             value={post.description}
    //             name="description"
    //             onChange={handleChange}
    //           />
    //         </b>
    //       </span>
    //     </div>

    //     <div className="singlePostInfo">
    //       <span>
    //         Meta Description:
    //         <b className="singlePostAuthor">
    //           <textarea
    //             className="singlePostDesc"
    //             value={post.metaDescription}
    //             name="metaDescription"
    //             onChange={handleChange}
    //           />
    //         </b>
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <div className="editPostPost">
      <div className="editPostPostWrapper">
        <img className="editPostPostImg" src={post.blogImage} alt="" />
        <div className="editPostMainDiv">
          <p className="editPostPostDesc">
            <span>
              Tittle:
              <b className="editPostPostAuthor">
                <input
                  className="editPostInput"
                  value={post.tittle}
                  name="tittle"
                  onChange={handleChange}
                />
              </b>
            </span>
          </p>
          <div className="editPostPostEdit">
            <button className="editPostSubmit" onClick={handlePublish}>
              Publish
            </button>
          </div>
          <p className="editPostPostDesc">
            <span>
              Description:
              <b className="editPostPostAuthor">
                <input
                  className="editPostInput"
                  value={post.description}
                  name="description"
                  onChange={handleChange}
                />
              </b>
            </span>
          </p>
          <p className="editPostPostDesc">
            <span>
              Meta Description:
              <b className="editPostPostAuthor">
                <input
                  className="editPostInput"
                  value={post.metaDescription}
                  name="metaDescription"
                  onChange={handleChange}
                />
              </b>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
