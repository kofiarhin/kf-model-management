import React from "react";
import { Link } from "react-router-dom";
import "./landing.styles.scss";

const Landing = () => {
  return (
    <div id="landing">
      <div className="overlay">
        <div className="content-wrapper">
          <h2>
            Unleash Your Potential. Connect with Top Agencies. Find Your Next
            Gig.
          </h2>
          <Link to="/register">Join Now</Link>
        </div>
      </div>
      <div className="img-container">
        <img src="/images/main.jpg" alt="" />
      </div>
    </div>
  );
};

export default Landing;
