import axios from "axios";
import { errorHandler } from "../helpers/catchExiosError";

const apiUrl = import.meta.env.VITE_API_URL;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const getAllPosts = errorHandler(async (filter) => {
  const res = await axios.get(apiUrl + "posts" , {params : {filter} , ...config });
  return res.data;
});

export const createPost = errorHandler(async (body , image) => {
  const newPost = new FormData();
  newPost.append("image", image);
  newPost.append("body", body);
  const res = await axios.post(apiUrl + "posts/createPost", newPost , {withCredentials: true});
  return res.data;
});

export const likePost = errorHandler(async (id) => {
  const res = await axios.post(apiUrl + `posts/likePost/${id}` , {} , config);
  return res.data;
});

export const getPost = errorHandler(async (id) => {
  const res = await axios.get(apiUrl + `posts/${id}`);
  return res.data;
}); 

export const createComment = errorHandler(async (body , image , postId) => {
  const newComment = new FormData();
  newComment.append("image", image);
  newComment.append("body", body);
  const res = await axios.post(apiUrl + `posts/${postId}/comment` , newComment , {withCredentials: true});
  return res.data;
});

export const deletePost = errorHandler(async (id) => {
  const res = await axios.delete(apiUrl + `posts/${id}` , config);
  return res.data;
});