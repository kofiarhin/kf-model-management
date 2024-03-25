import "./casting.styles.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { formatDate } from "../../utils/helper";
const Casting = () => {
  const { id } = useParams();
  const { data } = useFetch(`/api/castings/${id}`);

  return (
    <div className="container">
      <div className="cast-wrapper">
        <h1 className="heading"> {data.title} </h1>

        <p className="description"> {data.message} </p>
        <p> Start Date: {formatDate(data.startDate)} </p>
        <p> End Date: {formatDate(data.endDate)} </p>
        <p> Paid: {data.paid ? "Yes" : "No"} </p>

        <p>Image reference for this casting</p>
        <div className="img-wrapper">
          <img src={data.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Casting;
