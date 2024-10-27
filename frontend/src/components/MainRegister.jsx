import "../assets/styles/MainRegister.css";
export const MainRegister = () => {
  return (
    <main className="register-container">
      <form>
        <label>
          Username
          <input className="inp" type="text" />
        </label>
        <label>
          email
          <input className="inp" type="email" />
        </label>
        <label>
          Password
          <input className="inp" type="password" />
        </label>
        <button className="btn">submit</button>
      </form>
    </main>
  );
};
