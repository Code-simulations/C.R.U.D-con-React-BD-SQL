import { useContext, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainLogin } from "../components/MainLogin";
import { AuthContext } from "../context/UseAuthContex";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  useEffect(() => {
    if (isAuth !== undefined && isAuth !== null) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <>
      <Header title="Login" url="/register" link="Register" />
      <MainLogin />
      <Footer />
    </>
  );
};
