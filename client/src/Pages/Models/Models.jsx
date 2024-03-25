import ModelList from "../../Components/ModelList/ModelList";
import useFetch from "../../hooks/useFetch";

const Models = () => {
  const { data } = useFetch("/api/users/merged_data?userType=model");
  return (
    <div className="container">
      <h1 className="heading center">Models</h1>
      {data.length > 0 && <ModelList data={data} />}
    </div>
  );
};

export default Models;
