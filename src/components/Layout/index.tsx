import React from "react";
import "./index.scss";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen flex-col-reverse justify-between md:flex-row">
      <Sidebar />
      <div className="h-full w-full md:h-screen">
        <span className="tags bottom-auto top-3 left-3 md:top-12 md:left-64">
          &lt;body&gt;
        </span>

        <Outlet />

        <span className="tags top-[calc(100vh_-_120px)] left-10 md:top-[calc(100vh_-_80px)] md:left-64">
          &lt;/body&gt;
          <br />
          <span className=" ml-[-1.5rem]">&lt;html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;
