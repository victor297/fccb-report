// Login.js
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import authlogo from "@/assets/logo.png";
import Input from "@/components/input/Input";
import { useLoginMutation } from "@/redux/api/usersApiSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/redux/features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);
  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();
      dispatch(setCredentials({ ...res?.token}));
      navigate("/dashboard");
      toast.success("Login successful!");
    } catch (error) {
      toast.error(error.data?.message || "Login failed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  mt-36">
      <div className="w-full max-w-sm p-8 mx-auto ">
        <div className="flex items-center justify-center mb-4">
          <img src={authlogo} alt="Eduworld Logo" className="w-32 h-auto" />
        </div>
        <p className="text-3xl font-bold text-center mb-2">
          Log in to your account
        </p>
        <p className="text-center text-gray-600 mb-6">
          Welcome back! Please enter your details.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Username"
            id="username"
            type="username"
            placeholder="Enter your username"
            register={register("username", { required: "Username is required" })}
            error={errors.username?.message}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
            register={register("password", {
              required: "Password is required",
            })}
            error={errors.password?.message}
          />
       
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-orange-300 text-white font-medium py-2 rounded-md shadow hover:bg-orange-600 "
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
     
      </div>
    </div>
  );
};

export default Login;