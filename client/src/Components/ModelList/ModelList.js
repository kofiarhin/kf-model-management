import { Link } from "react-router-dom";
import "./modelList.styles.scss";
const ModelList = ({ data }) => {
  return (
    <div className="model-wrapper">
      {data.map((item, index) => {
        return (
          <Link to={`/models/${item._id}`} key={index} className="model-unit">
            <div className="img-container">
              <img src={item.images[0]} alt="" />
            </div>
            <p className="name"> {item.name} </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ModelList;
