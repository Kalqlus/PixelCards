import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./Header/Header";

function Layout() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
