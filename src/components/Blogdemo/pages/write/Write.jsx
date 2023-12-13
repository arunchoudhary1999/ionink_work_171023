// import React, { useState } from "react";

// const BlogForm = () => {
// const [formData, setFormData] = useState({
//   tittle: "",
//   blogImage: null,
//   description: "",
//   metaDescription: "",
// });

// const handleChange = (e) => {
//   const { name, value, type } = e.target;

//   // Handle file input separately
//   if (type === "file") {
//     setFormData({ ...formData, [name]: e.target.files[0] });
//   } else {
//     setFormData({ ...formData, [name]: value });
//   }
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const formDataForSubmission = new FormData();
//     formDataForSubmission.append("tittle", formData.tittle);
//     formDataForSubmission.append("description", formData.description);
//     formDataForSubmission.append("metaDescription", formData.metaDescription);
//     formDataForSubmission.append("blogImage", formData.blogImage);

//     const response = await fetch("https://bol-9joj.onrender.com/user/blogs", {
//       method: "POST",
//       body: formDataForSubmission,
//     });

//     if (response.ok) {
//       console.log("Blog submitted successfully!");
//       // You can perform additional actions after successful submission
//     } else {
//       console.error("Failed to submit blog.");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Title:
//         <input
//           type="text"
//           name="tittle"
//           value={formData.tittle}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Blog Image:
//         <input type="file" name="blogImage" onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Description:
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//         ></textarea>
//       </label>
//       <br />
//       <label>
//         Meta Description:
//         <input
//           type="text"
//           name="metaDescription"
//           value={formData.metaDescription}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Submit Blog</button>
//     </form>
//   );
// };

// export default BlogForm;

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Write.css";

export default function Write() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    tittle: "",
    blogImage: null,
    description: "",
    metaDescription: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // Handle file input separately
    if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataForSubmission = new FormData();
      formDataForSubmission.append("tittle", formData.tittle);
      formDataForSubmission.append("description", formData.description);
      formDataForSubmission.append("metaDescription", formData.metaDescription);
      formDataForSubmission.append("blogImage", formData.blogImage);

      const response = await fetch("https://bol-9joj.onrender.com/user/blogs", {
        method: "POST",
        body: formDataForSubmission,
      });

      if (response.ok) {
        console.log("Blog submitted successfully!");
        history.push("/blog");
        // You can perform additional actions after successful submission
      } else {
        console.error("Failed to submit blog.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
    <div className="write hidden">
      <img className="writeImg" src="/assets/images/add.png" alt="img" />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa fa-plus"></i>
          </label>
          <input
            id="fileInput"
            style={{ display: "none" }}
            // className="form-control"
            type="file"
            name="blogImage"
            onChange={handleChange}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            name="tittle"
            value={formData.tittle}
            onChange={handleChange}
          />
        </div>
        <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            type="text"
            autoFocus={true}
            placeholder="Meta Description"
            name="metaDescription"
            value={formData.metaDescription}
            onChange={handleChange}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

// import axios from "axios";
// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

// function Addproduct() {
// const history = useHistory();
// const [ptitle, setPtitle] = useState("");
// // const [pprice, setPprice] = useState("");
// // const [pfile, setPfile] = useState("");
// const [message, setMessage] = useState("");

// const uploadProduct = async () => {
//   const formData = new FormData();
//   formData.append("ptitle", ptitle);
//   // formData.append("pprice", pprice);
//   // formData.append("pfile", pfile);
//   const responce = await axios.post(
//     "https://bol-9joj.onrender.com/user/blogs",
//     formData,
//     {
//       headers: { "Content-Type": "multipart/form-data" },
//     }
//   );

//   if (responce.data.success) {
//     console.log(responce.data);
//     setMessage(responce.data.success);
//     setTimeout(() => {
//       history("/blog");
//     }, 2000);
//   }
// };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await uploadProduct();
//   };
//   return (
//     <React.Fragment>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-8 mt-4">
//             <h5 className="mb-4">Add Product </h5>
//             <p className="text-warning">{message}</p>

//             <form onSubmit={handleSubmit}>
//               <div className="mb-3 row">
//                 <label className="col-sm-3">Product Title </label>
//                 <div className="col-sm-9">
//                   <input
//                     type="text"
//                     className="form-control"
//                     onChange={(e) => setPtitle(e.target.value)}
//                   />
//                 </div>
//               </div>

//               {/* <div className="mb-3 row">
//                 <label className="col-sm-3">Product Price </label>
//                 <div className="col-sm-9">
//                   <input
//                     type="text"
//                     className="form-control"
//                     onChange={(e) => setPprice(e.target.value)}
//                   />
//                 </div>
//               </div> */}

//               {/* <div className="mb-3 row">
//                 <label className="col-sm-3">Product Image</label>
//                 <div className="col-sm-9">
//                   <input
// type="file"
// className="form-control"
// onChange={(e) => setPfile(e.target.files[0])}
//                   />
//                 </div>
//               </div> */}

//               <div className="mb-3 row">
//                 <label className="col-sm-3"></label>
//                 <div className="col-sm-9">
//                   <button type="submit" className="btn btn-success">
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }
// export default Addproduct;
