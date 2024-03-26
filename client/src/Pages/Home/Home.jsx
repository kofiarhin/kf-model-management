import { Link } from "react-router-dom";
import Models from "../../Components/Models/Models";
import "./home.styles.scss";
import Landing from "../../Components/Landing/Landing";
import FeaturedCasting from "../../Components/FeaturedCasting/FeaturedCasting";
const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <Landing />
        <section>
          <h1 className="heading center">Popular Models</h1>
          <Models />
        </section>

        <section>
          <h1 className="heading center">Popular Casting</h1>
          <FeaturedCasting />
        </section>
      </div>
    </div>
  );
};

export default Home;
