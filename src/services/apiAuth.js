import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export async function login(username, password) {
const res =  await axios.post(apiUrl + 'login', { username, password });
console.log(res)
}