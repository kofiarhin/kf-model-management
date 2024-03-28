import "./featuredModel.styles.scss";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
const FeaturedModels = () => {
  const { data } = useFetch("/api/users/merged_data?userType=model");

  console.log(data);

  return (
    <>
      {data && (
        <div className="featured-wrapper">
          {data.map((item, index) => {
            return (
              <Link
                to={`/models/${item._id}`}
                className="featured-unit"
                key={index}
              >
                <div className="overlay">
                  <div className="text-content">
                    <h2> {item.name} </h2>
                    <p> {item.location} </p>
                  </div>
                </div>
                <img src={item.images[0]} alt="" />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default FeaturedModels;
