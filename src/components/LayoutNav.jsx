import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";

const LayoutNav = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutNav;
