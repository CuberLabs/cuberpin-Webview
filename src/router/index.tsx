import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Banner, Culture, Quiz } from "../pages";
import { Layout } from "./layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route element={<Layout />}>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/exchange/culture" element={<Culture />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
