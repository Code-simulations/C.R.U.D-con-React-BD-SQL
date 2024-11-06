import { Suspense, useEffect, useRef, useState } from "react";
import "../assets/styles/MainHome.css";
import { createTasks, getTasks } from "../api/auth.api";
import { LoadingTasks } from "./LoadingTasks";

export const MainHome = () => {
  const [tasks, setTasks] = useState([]);
  const titleR = useRef();
  const descriptionR = useRef();
  const statusR = useRef();
  useEffect(() => {
    getTasks().then((res) => {
      setTasks(res.res.tasks);
      console.log(tasks);
    });
  }, []);
  const createTask = async (e) => {
    e.preventDefault();
    const title = titleR.current.value;
    const description = descriptionR.current.value;
    const status = statusR.current.checked;
    const { res } = await createTasks(title, description, status);
    alert(res.message);
    getTasks().then((res) => {
      setTasks(res.res.tasks);
      console.log(tasks);
    });
  };
  return (
    <main className="home-container">
      <div className="tasks-form">
        <form onSubmit={createTask}>
          <label>
            Title
            <input className="inp" type="text" ref={titleR} />
          </label>
          <label>
            Descriptions
            <input className="inp" type="text" ref={descriptionR} />
          </label>
          <label>
            task status
            <input className="inp-1" type="checkbox" ref={statusR} />
          </label>
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </div>
      <div className="tasks">
        <h2>Tasks</h2>
        <div className="tasks-container">
          <Suspense fallback={<LoadingTasks />}>
            {tasks !== 0 ? (
              tasks.map((e) => {
                return (
                  <div key={e.id} className="task">
                    <div>
                      <h2>{e.title}</h2>
                      <p>{e.description}</p>
                      <p>{e.isComplete ? "completada" : "pendiente"}</p>
                    </div>
                    <div className="btn-operator">
                      <button>eliminar</button>
                      <button>actualizar</button>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>no hay tareas para mostrar</h1>
            )}
          </Suspense>
        </div>
      </div>
    </main>
  );
};
