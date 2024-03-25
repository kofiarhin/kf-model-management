import useFetch from "../../hooks/useFetch";
import CastingList from "../../Components/CastingList/CastingList";
import { Link } from "react-router-dom";

const Castings = () => {
  const { data } = useFetch("/api/castings");
  console.log(data);

  return (
    <div>
      <Link to="/castings">
        <h1 className="heading center">Castings</h1>
      </Link>
      {data.length > 0 && <CastingList data={data} />}
    </div>
  );
};

export default Castings;
