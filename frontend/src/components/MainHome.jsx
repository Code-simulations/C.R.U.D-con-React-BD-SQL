import "../assets/styles/MainHome.css";
export const MainHome = () => {
  return (
    <main className="home-container">
      <div className="tasks-form">
        <form>
          <label>
            Title
            <input className="inp" type="text" />
          </label>
          <label>
            Descriptions
            <input className="inp" type="text" />
          </label>
          <label>
            task status
            <input className="inp-1" type="checkbox" />
          </label>
          <button className="btn">submit</button>
        </form>
      </div>
      <div className="tasks">
        <h2>Tasks</h2>
        <div className="tasks-container" id="tasks"></div>
      </div>
    </main>
  );
};
