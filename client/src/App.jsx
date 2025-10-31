import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./app/layout/layout";
import DeckPage from "./pages/deck/DeckPage";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/profile/ProfilePage";
import "./index.css";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DeckPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
