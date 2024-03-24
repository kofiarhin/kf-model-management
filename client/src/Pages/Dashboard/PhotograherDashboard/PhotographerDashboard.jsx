import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import CastingList from "../../../Components/CastingList/CastingList";
const PhotographerDashboard = () => {
  const { data } = useFetch("/api/castings");
  const { user } = useSelector((state) => state.auth);

  console.log(data);
  return (
    <div>
      <h1 className="heading center"> Welcome {user.name} </h1>
      <div className="cta-wrapper center">
        <Link to="/castings/create">Create Casting</Link>
        <CastingList user={user._id} data={data} />
      </div>
    </div>
  );
};

export default PhotographerDashboard;
