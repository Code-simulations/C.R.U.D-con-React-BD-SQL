import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainLogin } from "../components/MainLogin";

export const Login = () => {
  return (
    <>
      <Header title="Login" url="/register" link="Register" />
      <MainLogin />
      <Footer />
    </>
  );
};
