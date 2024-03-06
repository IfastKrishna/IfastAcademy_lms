import AdminSidebar from "./Admin";
import GuestSidebar from "./Guest";
import InstuctorSidebar from "./Instuctor";
import UserSidebar from "./User";
import { useSelector } from "react-redux";

function Sidebar({ onClose }) {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (isAuthenticated && user) {
    if (user.role === "admin") {
      return <AdminSidebar onClose={onClose} />;
    } else if (user.role === "instuctor") {
      return <InstuctorSidebar onClose={onClose} />;
    } else if (user.role === "user") {
      return <UserSidebar onClose={onClose} />;
    }
  }

  return <GuestSidebar onClose={onClose} />;
}

export default Sidebar;
