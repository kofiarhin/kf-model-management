import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import ImageForm from "../../../Components/ImageForm/ImageForm";
import ImageList from "../../../Components/ImageList/ImageList";

const ModelDashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    const getImages = async () => {
      const res = await fetch(`/api/images/${user._id}`);
      const data = await res.json();
      if (res.ok) {
        const { images } = data;

        setImages(images);
      }
    };
    getImages();
  }, [user]);

  return (
    <div>
      <h1 className="heading center"> Welcome {user.name} </h1>
      <div className="text-wrapper center">
        <Link to="/upload" className="text-center">
          Upload Image
        </Link>

        {images.length > 0 && <ImageList data={images} />}
      </div>
    </div>
  );
};

export default ModelDashboard;
