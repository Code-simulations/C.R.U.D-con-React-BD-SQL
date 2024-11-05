import "../assets/styles/MainLogin.css";
import { login } from "../api/auth.api.js";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UseAuthContex.jsx";
export const MainLogin = () => {
  const passwordRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);
  return (
    <main className="main-container">
      <form>
        <label>
          email
          <input type="email" className="inp" ref={emailRef} autoComplete="current-email" />
        </label>
        <label>
          Password
          <input
            type="password"
            className="inp"
            ref={passwordRef}
            autoComplete="current-password"
          />
        </label>
        <button
          className="btn"
          onClick={async (e) => {
            e.preventDefault();
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            const res = await login(email, password);
            alert(res.message);
            const reqSession = await fetch("http://localhost:4000/session", {
              method: "GET",
              credentials: "include",
            });
            const resSession = await reqSession.json();
            setIsAuth(resSession.user);
            navigate("/");
          }}
        >
          Submit
        </button>
      </form>
    </main>
  );
};
