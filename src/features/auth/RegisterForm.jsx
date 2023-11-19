import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import useRegister from "./useRegister";
import useUser from "../user/useUser";

const RegisterForm = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home", { replace: true });
    }
  }, [user, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const { register: registerUser, status } = useRegister();

  function onSubmit(data) {
    registerUser(data);
  }
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-6 p-4">
      <h1 className="text-3xl font-bold tracking-wider uppercase">Register</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-md gap-3 px-6 py-8 rounded-md bg-white/10"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="John doe"
            disabled={status === "loading"}
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
              minLength: {
                value: 3,
                message: "Username must be atleast 3 characters long",
              },
              maxLength: {
                value: 20,
                message: "Username must be less than 20 characters long",
              },
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "Username must contain only letters and numbers",
              },
            })}
            className="p-2 bg-transparent border rounded"
          />
          {errors?.username && (
            <span className="text-sm text-red-500">
              {errors?.username?.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="test@gmail.com"
            disabled={status === "loading"}
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              minLength: {
                value: 3,
                message: "Email must be atleast 3 characters long",
              },
              pattern: {
                value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                message: "Email must be a valid email address",
              },
            })}
            className="p-2 bg-transparent border rounded"
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="passwordTemp">Password</label>
          <input
            type="password"
            id="passwordTemp"
            placeholder="********"
            disabled={status === "loading"}
            {...register("passwordTemp", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "Password must be atleast 6 characters long",
              },
              maxLength: {
                value: 20,
                message: "Password must be less than 20 characters long",
              },
            })}
            className="p-2 bg-transparent border rounded"
          />
          {errors.passwordTemp && (
            <span className="text-sm text-red-500">
              {errors.passwordTemp.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            disabled={status === "loading"}
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              validate: (value) =>
                value === getValues("passwordTemp") || "Passwords do not match",
            })}
            className="p-2 bg-transparent border rounded"
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>
        <Button
          type="submit"
          size="large"
          width="full"
          disabled={status === "loading"}
          style={{ marginTop: "1.2rem" }}
        >
          Login
        </Button>
        <span className="mt-3 mr-2 text-right">
          Already signed in ?{" "}
          <Link to={"/login"} className="underline text-brand">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterForm;
