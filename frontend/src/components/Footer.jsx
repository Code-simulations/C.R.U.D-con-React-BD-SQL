import "./../assets/styles/Footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="footer-container">
      <h2>Autor: Da Silva Felix</h2>
      <h2>
        <Link to="https://www.instagram.com/da_silva_felix/" target="_blank">
          Red Sociales
        </Link>
      </h2>
    </footer>
  );
};
