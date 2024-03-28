import { Link } from "react-router-dom";
import "./featuredCasting.styles.scss";
import useFetch from "../../hooks/useFetch";
const FeaturedCasting = ({ isHome = true }) => {
  const { data } = useFetch("/api/castings");
  const featuredData = data && data.length > 3 ? data.slice(0, 3) : data;
  return (
    <>
      {featuredData && (
        <div className={`featured-wrapper ${isHome ? "home" : ""}`}>
          {featuredData.map((item, index) => {
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

                <img src={item.images[0]} alt="casting" />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default FeaturedCasting;
