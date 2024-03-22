import { Link } from "react-router-dom";
import Models from "../../Components/Models/Models";
import "./home.styles.scss";
import Landing from "../../Components/Landing/Landing";
const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <Landing />
        <Models />
      </div>
    </div>
  );
};

export default Home;
