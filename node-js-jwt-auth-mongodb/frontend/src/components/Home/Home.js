// This is a public page that shows public content. People don’t need to log in to view this page.
import React, { useState, useEffect } from "react";
// import UserService from "../services/user.service";
// import "./Header.css";
import "./Home.css";
// import { Link } from "react-router-dom";

const Home = () => {
  // const [content, setContent] = useState("");
  // useEffect(() => {
  //   UserService.getUserBoard().then(
  //     (response) => {
  //       setContent(response.data);
  //     },
  //     (error) => {
  //       const _content =
  //         (error.response && error.response.data) ||
  //         error.message ||
  //         error.toString();
  //       setContent(_content);
  //     }
  //   );
  // }, []);
  return (
    <div>
      <img
        className="Home-image"
        src="https://b.zmtcdn.com/data/o2_assets/b90ed7f7c7f06ce7a5b94b967d4ce3eb1621255947.png"
        alt=""
      />
    </div>
  );
};
export default Home;
