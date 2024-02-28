import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/features/authSlice";
import Api from "../../utils/Api/api.js";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authLogin = async (data) => {
    try {
      setLoading(true);
      const res = await Api.post("/users/login", data);
      dispatch(login(res.data.data.loggedInUser));
      toast.success(res.data.message);
      setLoading(false);
      navigate("/");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center gap-4 py-10">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to login.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg"
          onSubmit={handleSubmit(authLogin)}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              placeholder="Enter email or username"
              label="Your email or username"
              error={errors.emailorusername ? true : false}
              {...register("emailorusername", {
                required: true,
              })}
            />

            <Input
              type="password"
              size="lg"
              error={errors.password ? true : false}
              placeholder="********"
              label="Your Password"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          <Checkbox
            {...register("terms", { required: true })}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button
            type="submit"
            className="mt-6 flex justify-center"
            loading={loading}
            fullWidth
          >
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/signup" className="font-medium text-gray-900">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
