import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const AdminRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (!token || !user || user?.role !== "admin") {
    toast.error("Please first login as a admin");
    navigate("/admin");
  } else return children;
};

export default AdminRoute;
