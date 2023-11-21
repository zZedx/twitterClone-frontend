import axios from "axios";
import { errorHandler } from "../helpers/catchExiosError";

const apiUrl = import.meta.env.VITE_API_URL;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const getMessages = errorHandler(async (room) => {
  const { data } = await axios.get(`${apiUrl}messages/${room}`, config);
  return data.messages;
});
