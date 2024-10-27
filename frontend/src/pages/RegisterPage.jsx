import "./../assets/styles/Header.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MainRegister } from "../components/MainRegister";
export const Register = () => {
  return (
    <>
      <Header title="Register" url="/Login" link="Login" />
      <MainRegister />
      <Footer />
    </>
  );
};
