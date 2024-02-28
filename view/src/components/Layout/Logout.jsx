import React from "react";
import Api from "../../utils/Api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/features/authSlice";
import toast from "react-hot-toast";

/**
 *
 * @param {React.ReactNode} children
 * @param {React.RefObject<HTMLDivElement>} ref
 */
function LogoutWrapper({ children }, ref) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   *
   * @returns {Promise<void>}
   */
  async function userLogout() {
    try {
      await Api.post("users/logout");
      dispatch(logout());
      navigate("/login", { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div ref={ref} onClick={userLogout}>
      {children}
    </div>
  );
}

export default React.forwardRef(LogoutWrapper);
