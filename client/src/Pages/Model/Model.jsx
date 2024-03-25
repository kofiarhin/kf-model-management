import ImageList from "../../Components/ImageList/ImageList";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
const Model = () => {
  const { id } = useParams();
  const { data } = useFetch(`/api/users/${id}`);
  console.log(data);

  return (
    <div>
      <h1 className="heading center"> {data.name} </h1>
      {Object.keys(data).length > 0 && <ImageList data={data.images} />}
    </div>
  );
};

export default Model;
