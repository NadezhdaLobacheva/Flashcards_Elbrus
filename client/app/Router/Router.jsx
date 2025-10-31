import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../../pages/Home/HomePage";
import GamePage from "../../pages/Game/GamePage";
import LoginPage from "../../pages/Login/LoginPage";
import RegisterPage from "../../pages/Register/RegisterPage";
import TeamInfoPage from "../../pages/TeamInfo/TeamInfo";
import Layout from "../Layout/Layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/teaminfo" element={<TeamInfoPage />} />
          <Route path="*" element={<h1>Нет контента</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}