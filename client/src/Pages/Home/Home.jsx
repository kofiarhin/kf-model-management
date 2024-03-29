import { Link } from "react-router-dom";
import Models from "../../Components/Models/Models";
import "./home.styles.scss";
import Landing from "../../Components/Landing/Landing";
import FeaturedCastings from "../../Components/Featured/FeaturedCasting";
import FeaturedModels from "../../Components/Featured/FeaturedModels";
const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <Landing />
        <section>
          <h1 className="heading center">Popular Models</h1>
          <FeaturedModels />
        </section>

        <section>
          <h1 className="heading center">Popular Casting</h1>
          <FeaturedCastings />
        </section>
      </div>
    </div>
  );
};

export default Home;
