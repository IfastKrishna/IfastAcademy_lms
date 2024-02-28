import axios from "axios";

export const baseUrl = "http://localhost:8080/api/v1";
export const clientUrl = "http://localhost:5173/";

const api = axios.create({ baseURL: baseUrl, withCredentials: true });

export default api;
