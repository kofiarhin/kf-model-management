import useFetch from "../../hooks/useFetch";
import CastingList from "../../Components/CastingList/CastingList";
import { Link } from "react-router-dom";

const Castings = () => {
  const { data } = useFetch("/api/castings");

  return (
    <div className="container">
      <Link to="/castings">
        <h1 className="heading center">Castings</h1>
      </Link>
      {data && <CastingList data={data} />}
    </div>
  );
};

export default Castings;
