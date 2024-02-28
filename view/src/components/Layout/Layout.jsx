import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark-mode");
  }, []);

  return (
    <div className="flex relative">
      <div
        className={`fixed min-h-screen bg-white z-50 md:relative transition-all duration-300 ${
          isSidebarOpen
            ? "sm:w-[300px] w-4/5 md:w-[300px] translate-x-0 opacity-100"
            : `-translate-x-full w-0 opacity-0`
        }`}
      >
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </div>

      <div className="w-full">
        {/* Navbar */}
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Page */}
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
