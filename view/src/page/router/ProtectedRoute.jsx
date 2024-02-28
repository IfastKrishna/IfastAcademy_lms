import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children, roles }) {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const hasRequiredRole = roles && roles.includes(user?.role);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    } else if (roles && !hasRequiredRole) {
      navigate("/unauthorized", { replace: true });
    }
  }, [navigate, isAuthenticated, hasRequiredRole, roles, user]);

  return isAuthenticated && hasRequiredRole ? <>{children}</> : null;
}

export default ProtectedRoute;
