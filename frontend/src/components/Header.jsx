import { Link } from "react-router-dom";
import myFirma from "../assets/img/mi-firma.svg";
import "../assets/styles/Header.css";
import { AuthContext } from "../context/UseAuthContex";
import { useContext } from "react";
import { logout } from "../api/auth.api.js";
import { useNavigate } from "react-router-dom";
export const Header = ({ title, url, link }) => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <header className="login-header">
      <h1>{title}</h1>
      <img src={myFirma} alt="firma de creación " />
      {isAuth ? (
        <button
          className="btn-logout"
          onClick={async () => {
            const { res } = await logout();

            if (res) {
              setIsAuth(null);
            }
            alert(res.message);
            navigate("/login");
          }}
        >
          closing session
        </button>
      ) : (
        <Link to={url}>{link}</Link>
      )}
    </header>
  );
};
