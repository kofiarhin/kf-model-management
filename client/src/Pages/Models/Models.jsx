import ModelList from "../../Components/ModelList/ModelList";
import useFetch from "../../hooks/useFetch";
import Spinner from "../../Components/Spinner/Spinner";

const Models = () => {
  const { data, isLoading } = useFetch("/api/users/merged_data?userType=model");

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      {data && (
        <div className="container">
          <h1 className="heading center">Models</h1>
          {data.length > 0 && <ModelList data={data} />}
        </div>
      )}
    </>
  );
};

export default Models;
