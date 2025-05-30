import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const AffiliateRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !user || user?.role !== "affiliate") {
      navigate("/affiliate");
    }
  }, [token, user, navigate]);

  if (!token || !user || user?.role !== "affiliate") {
    return null;
  }

  return children;
};

export default AffiliateRoute;
