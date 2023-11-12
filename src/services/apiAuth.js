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
    const res = await axios.post(apiUrl + "login", { email, password }, config);
    return res.data;
});

export const register = errorHandler(async({username, password, email}) => {
    const res = await axios.post(apiUrl + "register", { username, password, email }, config);
    return res.data;
});
