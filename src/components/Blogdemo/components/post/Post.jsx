import { Link } from "react-router-dom";
import "./Post.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const blogHandleAPI = () => {
      axios
        .get("https://bol-9joj.onrender.com/user/blogs", {})
        .then((result) => {
          console.log(result);
          setPosts(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    blogHandleAPI();
  }, []);
  return (
    <>
      <div className="postTop">
        <div className="postPostEdit">
          <Link className="" to={`/blog/write`}>
            <button className="postSubmit">Add Post</button>
          </Link>
        </div>
        <div className="postDivCard">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <img className="postImg" src={post.blogImage} alt="" />
              <div className="postInfo">
                <span className="postTitle">
                  <Link to={`/blog/post/${post._id}`} className="link">
                    {post.tittle}
                  </Link>
                </span>
                <span className="postDate">{post.createdAt}</span>
                <p className="postDesc">{post.description}</p>
                <p className="postDesc">{post.metaDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
