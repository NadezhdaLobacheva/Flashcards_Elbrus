import React from "react";
import NavBar from "../../componets/NavBar";
import { Outlet } from "react-router";


export default function Layout() {
  return (
    <>
      <NavBar />
      {/* Outlet из react-router - компонент - темплат/шаблон */}
      <Outlet />
      {/* <h1>Footer</h1> */}
    </>
  );
}