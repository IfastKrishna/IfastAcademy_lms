import { LoginPage, SingUp, Home } from "../../page/index.js";
import App from "../../App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PageNotFound from "../Errors/PageNotFound.jsx";
import UnauthorizedPermission from "../Errors/UnAuthorized.jsx";
import Profile from "../Users/Profile.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Settings from "../Users/Settings/Settings.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path=""
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SingUp />} />
      <Route
        path="profile"
        element={
          <ProtectedRoute children={<Profile />} roles={["user", "admin"]} />
        }
      />
      <Route path="settings" element={<Settings />} />
      <Route path="unauthorized" element={<UnauthorizedPermission />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export { router };
