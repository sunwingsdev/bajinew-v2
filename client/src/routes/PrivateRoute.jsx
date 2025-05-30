import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  if (!token || !user) {
    toast.error("Please login first");
    return <Navigate to="/" />;
  } else return children;
};

export default PrivateRoute;
