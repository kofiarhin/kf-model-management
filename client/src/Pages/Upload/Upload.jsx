import "./upload.styles.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageForm from "../../Components/ImageForm/ImageForm";

const Upload = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div id="upload">
      <div className="form-wrapper"></div>
      <ImageForm />
    </div>
  );
};

export default Upload;
