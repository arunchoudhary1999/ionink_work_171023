import React, { useEffect } from "react";
import SinglePost from "../../components/singlePost/SinglePost";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Single.css";

const Single = () => {
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

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="single hidden">
        <SinglePost />
        <Sidebar />
      </div>
    </>
  );
};

export default Single;
