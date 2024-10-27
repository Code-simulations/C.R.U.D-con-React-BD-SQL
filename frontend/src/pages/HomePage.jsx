import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainHome } from "../components/MainHome";

export const Home = () => {
  return (
    <>
      <Header title="Home" url="/login" link="login" />
      <MainHome />
      <Footer />
    </>
  );
};
