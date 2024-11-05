import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/UseAuthContex";
import { useContext } from "react";

export const PrivateRouter = () => {
  const { isAuth } = useContext(AuthContext);
  if (isAuth === undefined) {
    return <h1>Loading...</h1>;
  }
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
