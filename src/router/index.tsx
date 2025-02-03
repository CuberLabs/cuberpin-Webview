import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Banner, Culture, Quiz } from "../pages";
import { Layout } from "./layout";
import { StartWithQuiz } from "../pages/Register/StartWithQuiz";
import { Register } from "../pages/Register";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route element={<Layout />}>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/exchange/:id" element={<Culture />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
