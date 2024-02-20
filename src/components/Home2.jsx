import React from "react";
import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";

function Home2() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Home2;
