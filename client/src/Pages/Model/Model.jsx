import ImageList from "../../Components/ImageList/ImageList";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";

// model
const Model = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`/api/users/${id}`);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1 className="heading center"> {data?.name} </h1>
      {data && <ImageList data={data.images} />}
    </div>
  );
};

export default Model;
