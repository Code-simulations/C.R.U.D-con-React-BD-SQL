import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/LoginPage";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
