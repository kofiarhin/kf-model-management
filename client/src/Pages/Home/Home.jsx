import { Link } from "react-router-dom";
import "./home.styles.scss";
const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="img-wrapper">
          <div className="overlay">
            <div className="cta-wrapper">
              <Link to="/register">Become A Model</Link>
              <Link to="/register">Post A Cast</Link>
            </div>
          </div>
          <img src="/images/landing.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
