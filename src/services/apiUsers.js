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