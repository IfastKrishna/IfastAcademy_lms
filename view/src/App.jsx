import { useEffect, useState } from "react";
import { Layout } from "./components";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Api from "./utils/Api/api";
import { login } from "./store/features/authSlice";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Api.get("/users/current-user")
      .then((response) => {
        setLoading(false);
        dispatch(login(response.data.data));
      })
      .catch((error) => {
        setLoading(false);
        navigate("/login", { replace: true });
      });
  }, [isAuthenticated]);
  return !loading ? (
    <div>
      <Layout />
      <Toaster />
    </div>
  ) : (
    <>
      <p>loading</p>
    </>
  );
};

export default App;
