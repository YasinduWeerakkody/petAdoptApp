import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7033/api", // Replace with your base API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
