import { useContext, useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainHome } from "../components/MainHome";
import { AuthContext } from "../context/UseAuthContex";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth === undefined || isAuth === null) {
      console.log(isAuth);
      navigate("/login");
    }
  }, [isAuth]);

  return (
    <>
      <Header title="Home" url="/login" link="login" />
      <MainHome />
      <Footer />
    </>
  );
};
