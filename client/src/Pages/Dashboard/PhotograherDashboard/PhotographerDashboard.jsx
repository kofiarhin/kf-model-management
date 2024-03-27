import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import CastingList from "../../../Components/CastingList/CastingList";
const PhotographerDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const { data } = useFetch(`/api/castings/user/${user._id}`);

  return (
    <>
      {data && (
        <div>
          <div className="flex-wrapper">
            <h1 className="heading center"> Welcome {user.name} </h1>
            <div className="cta-wrapper center">
              <Link to="/castings/create">Create Casting</Link>
            </div>
          </div>
          <CastingList user={user._id} data={data} />
        </div>
      )}
    </>
  );
};

export default PhotographerDashboard;
