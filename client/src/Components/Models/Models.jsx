import ModelList from "../ModelList/ModelList";
import UserList from "../UserList/UserList";
import useFetch from "../../hooks/useFetch";
const Models = () => {
  const { data } = useFetch("/api/users/merged_data?userType=model");
  return <div>{data.length > 0 && <ModelList data={data} />}</div>;
};

export default Models;
