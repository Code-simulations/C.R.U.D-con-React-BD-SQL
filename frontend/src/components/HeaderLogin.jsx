import { Link } from "react-router-dom";
import myFirma from "../assets/img/mi-firma.svg";
import "../assets/styles/LoginHeader.css";
export const LoginHeader = ({ title }) => {
  return (
    <header className="login-header">
      <h1>{title}</h1>
      <img src={myFirma} alt="firma de creación " />
      <Link to="/register">Register</Link>
    </header>
  );
};
