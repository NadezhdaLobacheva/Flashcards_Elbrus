import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../../pages/Home/HomePage";
import GamePage from "../../pages/Game/GamePage";
import Layout from "../Layout/Layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="*" element={<h1>Нет контента</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
