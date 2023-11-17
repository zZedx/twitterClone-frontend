import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import SpinnerMini from "../../ui/SpinnerMini";
import { useCurrentUser } from "../../ui/ProtectedRoutes";
import useUpdateProfile from "./useUpdateProfile";

function UpdateUserDataForm({ onCloseFullModal }) {
  const { user } = useCurrentUser();
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: user,
  });
  const { errors } = formState;
  const { updateProfile, status } = useUpdateProfile();

  function onSubmit(data) {
    updateProfile(
      { ...user, ...data },
      {
        onSettled: () => {
          onCloseFullModal();
        },
      }
    );
  }

  function handleCancel(e) {
    e.preventDefault();
    onCloseFullModal();
    reset({ ...user, oldPassword: "", newPassword: "", password: "" });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-gray-300" htmlFor="email">
          Email address
        </label>
        <input
          type="text"
          id="email"
          className="px-2 py-1 border rounded"
          disabled
          {...register("email")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-gray-300" htmlFor="displayName">
          Display Name
        </label>
        <input
          type="text"
          className={`${
            status === "pending" ? "bg-white" : "bg-transparent"
          } px-2 py-1 border rounded`}
          id="displayName"
          {...register("displayName", {
            required: "This field is required",
          })}
          disabled={status === "pending"}
        />
        {errors?.displayName?.message && (
          <p className="text-sm text-red-500">{errors.displayName.message}</p>
        )}
      </div>
      <div className="flex flex-col justify-between max-w-full gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-gray-300" htmlFor="avatar">
            Avatar image
          </label>
          <input
            type="file"
            className={`${
              status === "pending" ? "bg-white" : "bg-transparent"
            } w-fit`}
            id="avatar"
            disabled={status === "pending"}
            accept="image/*"
            {...register("avatar", {
              validate: (fileData) => {
                if (typeof fileData === "string" || fileData?.length === 1)
                  return true;
                return "File is required";
              },
            })}
          />
          {errors?.avatar?.message && (
            <p className="text-sm text-red-500">{errors.avatar.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-300" htmlFor="coverImage">
            Cover image
          </label>
          <input
            type="file"
            className={`${
              status === "pending" ? "bg-white" : "bg-transparent"
            } w-fit`}
            id="coverImage"
            disabled={status === "pending"}
            accept="image/*"
            {...register("coverImage", {
              validate: (fileData) => {
                if (typeof fileData === "string" || fileData?.length === 1)
                  return true;
                return "File is required";
              },
            })}
          />
          {errors?.coverImage?.message && (
            <p className="text-sm text-red-500">{errors.coverImage.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-gray-300" htmlFor="bio">
          Bio
        </label>
        <textarea
          id="bio"
          rows="3"
          disabled={status === "pending"}
          {...register("bio")}
          className={`${
            status === "pending" ? "bg-white" : "bg-transparent"
          } px-2 py-1 border rounded`}
        />
      </div>

      {/* <div className="flex flex-col gap-1">
        <label htmlFor="oldPassword">Old Password</label>
        <input
          type="password"
          id="oldPassword"
          {...register("oldPassword", {
            validate: (value) => {
              if (getValues().newPassword.length === 0) return true;
              return (
                value.length > 0 ||
                "Please enter old password if you want to change password"
              );
            },
          })}
          disabled={status === "pending"}
        />
        {errors?.oldPassword?.message && <p>{errors.oldPassword.message}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="newPassword">New Password</label>
        <input
          type="password"
          id="newPassword"
          {...register("newPassword", {
            validate: (value) => {
              if (!value) return true;
              return (
                value.length >= 6 ||
                "Password must be a minimum of 6 characters"
              );
            },
          })}
          disabled={status === "pending"}
        />
        {errors?.newPassword?.message && <p>{errors.newPassword.message}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Confirm New Password</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            validate: (value) =>
              value === getValues().newPassword || "Passwords do not match",
          })}
          disabled={status === "pending"}
        />
        {errors?.password?.message && <p>{errors.password.message}</p>}
      </div> */}
      <div className="flex items-center justify-end gap-3 mt-3">
        <Button
          size="normal"
          disabled={status === "pending"}
          onClick={handleCancel}
          addClass="bg-transparent border border-gray-500 hover:bg-gray-500 hover:text-white/90"
        >
          Cancel
        </Button>
        <Button disabled={status === "pending"} size="normal">
          {status === "pending" ? <SpinnerMini /> : "Update Account"}
        </Button>
      </div>
    </form>
  );
}

export default UpdateUserDataForm;
