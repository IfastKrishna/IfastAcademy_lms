import AdminSidebar from "./Admin";
import GuestSidebar from "./Guest";
import InstuctorSidebar from "./Instuctor";
import UserSidebar from "./User";
import { useSelector } from "react-redux";

function Sidebar({ isSidebarOpen }) {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (isAuthenticated && user) {
    if (user.role === "admin") {
      return <AdminSidebar isSidebarOpen={isSidebarOpen} />;
    } else if (user.role === "instuctor") {
      return <InstuctorSidebar isSidebarOpen={isSidebarOpen} />;
    } else if (user.role === "user") {
      return <UserSidebar isSidebarOpen={isSidebarOpen} />;
    }
  }

  return <GuestSidebar isSidebarOpen={isSidebarOpen} />;
}

export default Sidebar;
