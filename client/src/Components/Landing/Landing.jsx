import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="img-wrapper">
      <div className="overlay">
        <div className="cta-wrapper">
          <Link to="/register">Become A Model</Link>
          <Link to="/register">Post A Cast</Link>
        </div>
      </div>
      <img src="/images/landing.jpg" alt="" />
    </div>
  );
};

export default Landing;
