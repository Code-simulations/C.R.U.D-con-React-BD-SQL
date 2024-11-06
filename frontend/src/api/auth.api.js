export const login = async (gmail, pass) => {
  const reqLogin = await fetch("http://localhost:4000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: gmail,
      password: pass,
    }),
    credentials: "include",
  });
  const resLogin = await reqLogin.json();
  return { resLogin, reqLogin };
};

export const logout = async () => {
  const req = await fetch("http://localhost:4000/logout", {
    method: "POST",
    credentials: "include",
  });
  const res = await req.json();
  return { res, req };
};

export const register = async (name, pass, gmail) => {
  const req = await fetch("http://localhost:4000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: name,
      password: pass,
      email: gmail,
    }),
  });
  const res = await req.json();
  return { res };
};

export const createTasks = async (title, description, status) => {
  const req = await fetch("http://localhost:4000/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      title: title,
      description: description,
      status: status,
    }),
  });
  const res = await req.json();
  return { res };
};

export const getTasks = async () => {
  const req = await fetch("http://localhost:4000/tasks", { method: "GET", credentials: "include" });
  const res = await req.json();
  return { res };
};
