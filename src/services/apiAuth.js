import axios from "axios";
import {errorHandler} from "../helpers/catchExiosError";

const apiUrl = import.meta.env.VITE_API_URL;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const login = errorHandler(async(email, password) => {
    const res = await axios.post(apiUrl + "users/login", { email, password }, config);
    return res.data;
});

export const register = errorHandler(async({username, password, email}) => {
    const res = await axios.post(apiUrl + "users/register", { username, password, email }, config);
    return res.data;
});

export const getUser = errorHandler(async() => {
    const res = await axios.get(apiUrl + "users/getUser", config);
    return res.data;
});
