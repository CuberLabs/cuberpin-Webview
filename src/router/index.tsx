import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Banner, Quiz } from "../pages";
import { Layout } from "./layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route element={<Layout />}>
          <Route path="/quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
