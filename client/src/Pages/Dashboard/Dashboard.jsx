import { useEffect } from "react";
import { useSelector } from "react-redux";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import ModelDashboard from "./ModelDashboard/ModelDashboard";
import PhotographerDashboard from "./PhotograherDashboard/PhotographerDashboard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return (
    <div className="container">
      {user?.userType === "admin" && <AdminDashboard />}
      {user?.userType === "model" && <ModelDashboard />}
      {user?.userType === "photographer" && <PhotographerDashboard />}
    </div>
  );
};

export default Dashboard;
