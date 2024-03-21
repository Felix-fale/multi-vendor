import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PretectedRoute = ({ children }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  // const { loading, isAuthenticated } = useSelector((state) => state.user);

  if (loading === false) {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  }
};

export default PretectedRoute;
