import axios from "axios";

//connect with base url always connect with timeout of 10sec
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});
console.log("Base URL:", import.meta.env.VITE_API_BASE_URL);
export default apiClient;
