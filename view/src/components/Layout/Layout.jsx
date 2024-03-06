import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import { Drawer } from "@material-tailwind/react";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Drawer open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <Sidebar isSidebarOpen={isSidebarOpen} onClose={setIsSidebarOpen} />
      </Drawer>
      <div className="w-full relative">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className="w-full px-1 py-1 sm:px-1.5 sm:py-2  md:px-3 md:py-3">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
