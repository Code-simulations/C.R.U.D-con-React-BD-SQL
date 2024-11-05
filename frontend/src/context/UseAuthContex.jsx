import { createContext, useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(undefined);

  useEffect(() => {
    fetch("http://localhost:4000/session", { method: "GET", credentials: "include" })
      .then((res) => res.json())
      .then((data) => setIsAuth(data.user))
      .catch(setIsAuth(null));
  }, []);

  return <AuthContext.Provider value={{ setIsAuth, isAuth }}>{children}</AuthContext.Provider>;
};
