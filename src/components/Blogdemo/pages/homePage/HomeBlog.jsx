import React, { useState, useEffect } from "react";
import "./HomeBlog.css";
// import Post from "./BlogHome/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import Blogheader from "../../components/header/Blogheader";
import Posts from "../../components/posts/Posts";
// import axios from "axios";

const HomeBlog = () => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  // const blogHandleAPI = () => {
  //   axios
  //     .get("https://bol-9joj.onrender.com/user/blogs", {})
  //     .then((result) => {
  //       console.log(result);
  //       setPosts(result.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // blogHandleAPI();
  // }, []);

  return (
    <>
      <Blogheader />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default HomeBlog;
