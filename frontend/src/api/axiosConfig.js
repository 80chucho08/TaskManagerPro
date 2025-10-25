import axios from "axios";

const api =axios.create({
    baseURL: "http://localhost:3001/api", // asegurar puerto correcto del backend
});

export default api;