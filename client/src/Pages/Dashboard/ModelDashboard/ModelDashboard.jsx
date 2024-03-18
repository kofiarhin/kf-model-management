import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageForm from "../../../Components/ImageForm/ImageForm";

const ModelDashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div>
      <h1 className="heading center"> Welcome {user.name} </h1>

      <div className="form-wrapper"></div>
      <ImageForm />
    </div>
  );
};

export default ModelDashboard;
