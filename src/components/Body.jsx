import { Outlet } from "react-router-dom";
import { Head } from "./Head";
import { Sidebar } from "./Sidebar";

const Body = () => {
  return (
    <>
      <Head />
      <div className="mt-[4.6rem] flex">
        <Sidebar />
        <Outlet />
        {/**
         * Outlet replace with path
         * when path is "/" outlet replace with <MainContainer/>
         * when path is "/profile" outlet replace with <MyProfile/>
         *
         */}
      </div>
    </>
  );
};

export { Body };
