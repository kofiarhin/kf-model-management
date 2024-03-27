import "./castingList.styles.scss";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/helper";

const CastingList = ({ data }) => {
  return (
    <div>
      <div className="casting-wrapper">
        {data.map((casting, index) => {
          return (
            <div key={index} className="casting-unit">
              <div className="img-container">
                <img src={casting.images[0]} alt="" />
              </div>
              <div className="text-container">
                <h1 className="text-large">
                  {" "}
                  {casting.title.length > 30
                    ? `${casting.title.slice(0, 30)}...`
                    : casting.title}
                </h1>
                <p>Location: {casting.location} </p>
                <p>Casting Ends {formatDate(casting.endDate)} </p>
              </div>

              <Link to={`/castings/${casting._id}`}>More Details</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CastingList;
