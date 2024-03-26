import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { formatDate } from "../../utils/helper";
import "./casting.styles.scss";

const Casting = () => {
  const { id } = useParams();

  const { data } = useFetch(`/api/castings/${id}`);
  console.log(data);

  return (
    <div>
      {data ? (
        <div className="container">
          <div className="cast-wrapper">
            <h1 className="heading"> {data.title} </h1>

            <p className="description"> {data.message} </p>
            <p> Start Date: {formatDate(data.startDate)} </p>
            <p> End Date: {formatDate(data.endDate)} </p>
            <p> Paid: {data.paid ? "Yes" : "No"} </p>

            <p>Image reference for this casting</p>

            <div className="img-wrapper">
              {data.images.map((item, index) => {
                return (
                  <a href={item} target="_blank" key={index}>
                    <img src={item} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Casting;
