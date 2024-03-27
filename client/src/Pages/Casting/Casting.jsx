import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { formatDate } from "../../utils/helper";
import "./casting.styles.scss";
import Spinner from "../../Components/Spinner/Spinner";

const Casting = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetch(`/api/castings/${id}`);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      {data ? (
        <div className="container">
          <div className="cast-wrapper">
            <h2 className="text-large"> {data.title} </h2>
            <p>Requirement:</p>
            <p className="description"> {data.message} </p>
            <p> Start Date: {formatDate(data.startDate)} </p>
            <p> End Date: {formatDate(data.endDate)} </p>
            <p> Paid: {data.paid ? "Yes" : "No"} </p>

            <div className="image-content">
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
        </div>
      ) : null}
    </div>
  );
};

export default Casting;
