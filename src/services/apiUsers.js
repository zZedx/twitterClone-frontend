import axios from "axios";
import {errorHandler} from "../helpers/catchExiosError";

const apiUrl = import.meta.env.VITE_API_URL;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const getUserProfile = errorHandler(async(username) => {
    const res = await axios.get(apiUrl + "users/" + username, config);
    return res.data;
});

export const followUnfollowUser = errorHandler(async(username) => {
    const res = await axios.put(apiUrl + "users/" + username + "/followUnfollow", {}, config);
    return res.data;
});

export const searchUsers = errorHandler(async(query) => {
    const res = await axios.get(apiUrl + "users/search/" + query, config);
    return res.data;
});

export const deleteAccount = errorHandler(async() => {
    const res = await axios.delete(apiUrl + "users/deleteAccount", config);
    return res.data;
});

export const getFollowedUsers = errorHandler(async() => {
    const res = await axios.get(apiUrl + "users/followedUsers", config);
    return res.data;
});