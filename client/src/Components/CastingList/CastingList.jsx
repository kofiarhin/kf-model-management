import "./castingList.styles.scss";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/helper";

const CastingList = ({ userId, data }) => {
  const castingData = userId
    ? data.filter((item) => item.userId.equals(userId))
    : data;

  return (
    <div className="container">
      <div className="casting-wrapper">
        {castingData.map((casting, index) => {
          return (
            <div key={index} className="casting-unit">
              <div className="img-container">
                <img src={casting.image} alt="" />
              </div>
              <div className="text-content">
                <h1 className="heading">
                  {" "}
                  {casting.title.length > 30
                    ? `${casting.title.slice(0, 30)}...`
                    : casting.title}
                </h1>
              </div>
              <p>Location: {casting.location} </p>
              <p>Casting Ends {formatDate(casting.endDate)} </p>
              <Link to={`/castings/${casting._id}`}>More Details</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CastingList;
