import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Api from "../../utils/Api/api";
import toast from "react-hot-toast";
import { handleError } from "../../utils/hadleError";

export default function SingUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const registerUser = async (user) => {
    try {
      setLoading(true);
      const res = await Api.post("users/register", user);
      toast.success(res.data.message);
      setLoading(false);
      navigate("/login");
    } catch (err) {
      toast.error(handleError(err.response.data));
      setLoading(false);
    }
  };
  return (
    <div className="w-full flex justify-center pt-10">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg"
          onSubmit={handleSubmit(registerUser)}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              placeholder="name@mail.com"
              label="Your Name"
              error={errors.name ? true : false}
              {...register("name", { required: "Name is required" })}
            />

            <Input
              size="lg"
              placeholder="name@mail.com"
              label="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              error={errors.email ? true : false}
            />
            <Input
              size="lg"
              placeholder="xxxxxxxxxx"
              label="Your Phone"
              type="tel"
              {...register("phone", {
                required: "Phone Number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Please enter a valid Phone Number",
                },
              })}
              error={errors.phone ? true : false}
            />

            <Input
              type="password"
              size="lg"
              placeholder="********"
              label="Your Password"
              {...register("password", { required: "Password is required" })}
              error={errors.password ? true : false}
            />
          </div>
          <Checkbox
            {...register("terms", { required: "Terms and Conditions" })}
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
            fullWidth
            loading={loading}
          >
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
