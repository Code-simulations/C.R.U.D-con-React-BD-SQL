import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/LoginPage";
import { Register } from "./pages/RegisterPage";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
