import React from "react";
import { Link } from "react-router-dom";
import "./landing.styles.scss";

const Landing = () => {
  return (
    <div id="landing">
      <div className="overlay"></div>
      <div className="img-container">
        <img src="/images/main.jpg" alt="" />
      </div>
    </div>
  );
};

export default Landing;
