import axios from "axios";
import { errorHandler } from "../helpers/catchExiosError";

const apiUrl = import.meta.env.VITE_API_URL;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const login = errorHandler(async (email, password) => {
  const res = await axios.post(
    apiUrl + "users/login",
    { email, password },
    config
  );
  return res.data;
});

export const register = errorHandler(async ({ username, password, email }) => {
  const res = await axios.post(
    apiUrl + "users/register",
    { username, password, email },
    config
  );
  return res.data;
});

export const getUser = errorHandler(async () => {
  const res = await axios.get(apiUrl + "users/getUser", config);
  return res.data;
});

export const logout = errorHandler(async () => {
  const res = await axios.get(apiUrl + "users/logout", config);
  return res.data;
});

export const updateUser = errorHandler(async (data) => {
  const hasImagePathAvatar = data.avatar?.startsWith?.("https://res.cloudinary.com");
  const hasImagePathCover = data.coverImage?.startsWith?.("https://res.cloudinary.com");
  const updateUserData = new FormData();
  updateUserData.append("avatar", hasImagePathAvatar ? data.avatar : data.avatar[0]);
  updateUserData.append("coverImage", hasImagePathCover ? data.coverImage : data.coverImage[0]);
  updateUserData.append("displayName", data.displayName);
  updateUserData.append("bio", data.bio);
  updateUserData.append("email", data.email);
  updateUserData.append("password", data.password);
  updateUserData.append("avatarName", data.avatarName);
  updateUserData.append("coverImageName", data.coverImageName);

  const res = await axios.patch(apiUrl + "users/updateUser", updateUserData, {withCredentials: true});
  return res.data;
});

export const checkStatus = errorHandler(async () => {
  const res = await axios.get(apiUrl + "status", config);
  return res.data;
});
