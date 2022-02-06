import axios from "axios";

const token = window.localStorage.getItem("token");

const api = axios.create({
  baseURL: "http://209.97.162.0",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default api;
