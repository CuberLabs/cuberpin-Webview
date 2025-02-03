import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Banner, Culture, Quiz, Register, Login } from "../pages";
import { Layout } from "./layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route element={<Layout />}>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/exchange/:id" element={<Culture />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
