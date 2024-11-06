import "../assets/styles/MainRegister.css";
import { useRef } from "react";
import { register } from "../api/auth.api.js";
import { useNavigate } from "react-router-dom";
export const MainRegister = () => {
  const usernameR = useRef();
  const emailR = useRef();
  const passwordR = useRef();
  const navigate = useNavigate();
  return (
    <main className="register-container">
      <form>
        <label>
          Username
          <input className="inp" type="text" ref={usernameR} />
        </label>
        <label>
          email
          <input className="inp" type="email" ref={emailR} />
        </label>
        <label>
          Password
          <input className="inp" type="password" ref={passwordR} />
        </label>
        <button
          className="btn"
          onClick={async (e) => {
            e.preventDefault();
            const username = usernameR.current.value;
            const password = passwordR.current.value;
            const email = emailR.current.value;
            const { res } = await register(username, password, email);
            alert(res.message);
            navigate("/login");
          }}
        >
          submit
        </button>
      </form>
    </main>
  );
};
