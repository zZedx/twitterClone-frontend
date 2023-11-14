import axios from "axios";
import { errorHandler } from "../helpers/catchExiosError";

const apiUrl = import.meta.env.VITE_API_URL;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const getAllPosts = errorHandler(async () => {
  const res = await axios.get(apiUrl + "posts");
  return res.data;
});

export const createPost = errorHandler(async (body) => {
  const res = await axios.post(apiUrl + "posts/createPost", {body} , config);
  return res.data;
});

export const likePost = errorHandler(async (id) => {
  const res = await axios.post(apiUrl + `posts/likePost/${id}` , {} , config);
  return res.data;
});
