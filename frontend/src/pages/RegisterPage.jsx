import "./../assets/styles/Header.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MainRegister } from "../components/MainRegister";
import { AuthContext } from "../context/UseAuthContex";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useEffect } from "react";
export const Register = () => {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  useEffect(() => {
    if (isAuth !== undefined && isAuth !== null) {
      navigate("/");
    }
  }, [isAuth]);
  return (
    <>
      <Header title="Register" url="/login" link="Login" />
      <MainRegister />
      <Footer />
    </>
  );
};
