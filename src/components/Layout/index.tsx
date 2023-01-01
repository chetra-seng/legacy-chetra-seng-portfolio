import React from "react";
import "./index.scss";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="absolute w-screen h-screen">
        <span className="tags bottom-auto top-12">&lt;body&gt;</span>

        <Outlet />

        <span className="tags top-[calc(100vh_-_80px)]">
          &lt;/body&gt;
          <br />
          <span className=" ml-[-1.5rem]">&lt;html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;
