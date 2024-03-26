import { Link } from "react-router-dom";
import "./featuredCasting.styles.scss";
import useFetch from "../../hooks/useFetch";
const FeaturedCasting = () => {
  const { data } = useFetch("/api/castings");
  return (
    <>
      {data && (
        <div className="featured-wrapper">
          {data.map((item, index) => {
            return (
              <Link
                to={`/castings/${item._id}`}
                className="featured-unit"
                key={index}
              >
                <div className="overlay">
                  <h2> {item.title} </h2>
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
