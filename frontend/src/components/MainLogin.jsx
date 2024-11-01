import "../assets/styles/Login.css";
export const MainLogin = () => {
  return (
    <main className="main-container">
      <form>
        <label>
          username
          <input type="text" className="inp" />
        </label>
        <label>
          Password
          <input type="password" className="inp" />
        </label>
        <button className="btn">Submit</button>
      </form>
    </main>
  );
};
