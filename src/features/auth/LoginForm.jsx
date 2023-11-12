import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {login , status} = useLogin()

  function onSubmit(data){
    login(data)
  }
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-6 p-4">
      <h1 className="text-3xl font-bold tracking-wider uppercase">Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-md gap-3 px-6 py-8 rounded-md bg-white/10"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Email</label>
          <input
            type="email"
            id="email"
            disabled={status === "loading"}
            {...register("email", { required: true })}
            className="p-2 bg-transparent border rounded"
          />
          {errors.email && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            disabled={status === "loading"}
            {...register("password", { required: true })}
            className="p-2 bg-transparent border rounded"
          />
          {errors.password && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>
        <Button
          type="submit"
          size="large"
          width="full"
          style={{marginTop: "1.2rem"}}
          disabled={status === "loading"}
        >
          Login
        </Button>
        <span className="mt-3 mr-2 text-right">Not a user ? <Link to={"/register"} className="underline text-brand">Register</Link></span>
      </form>
    </div>
  );
};

export default LoginForm;
