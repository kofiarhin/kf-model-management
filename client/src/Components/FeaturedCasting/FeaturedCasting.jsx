import { Link } from "react-router-dom";
import "./featuredCasting.styles.scss";
import useFetch from "../../hooks/useFetch";
const FeaturedCasting = ({ isHome = true }) => {
  const { data } = useFetch("/api/castings");
  return (
    <>
      {data && (
        <div className={`featured-wrapper ${isHome ? "home" : ""}`}>
          {data.map((item, index) => {
            return (
              <Link
                to={`/castings/${item._id}`}
                className="featured-unit"
                key={index}
              >
                <div className="overlay">
                  <div className="content">
                    <h2> {item.title} </h2>
                    <p> {item.location} </p>
                  </div>
                </div>
                <div className="img-container">
                  <img src={item.images[0]} alt="" />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default FeaturedCasting;
