import { Link } from "react-router-dom";
import myFirma from "../assets/img/mi-firma.svg";
import "../assets/styles/Header.css";
export const Header = ({ title, url, link }) => {
  return (
    <header className="login-header">
      <h1>{title}</h1>
      <img src={myFirma} alt="firma de creación " />
      <Link to={url}>{link}</Link>
    </header>
  );
};
