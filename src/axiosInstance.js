import axios from "axios";
import config from "./apiConfig";

const axiosInstance = axios.create({
    baseURL: config.apiUrl,
    timeout: 10000,
});

export default axiosInstance;
