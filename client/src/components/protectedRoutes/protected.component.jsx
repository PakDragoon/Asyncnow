import { Navigate, Outlet } from "react-router-dom";

function useAuth() {
    return false;
}

function PrivateRoute() {
    const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to="/login" />;
  }

  export default PrivateRoute