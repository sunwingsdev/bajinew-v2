import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import toast from "react-hot-toast";

const CashAgentRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !user || user?.role !== "agent") {
      toast.error("Please login as an agent first");
      navigate("/becomeanagent");
    }
  }, [token, user, navigate]);

  if (!token || !user || user?.role !== "agent") {
    return null;
  }

  return children;
};

export default CashAgentRoute;
