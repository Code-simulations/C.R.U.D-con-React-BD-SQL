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
  return resLogin;
};
