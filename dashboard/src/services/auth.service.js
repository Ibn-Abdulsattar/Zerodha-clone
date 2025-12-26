import axios from "axios";

const API_URL = import.meta.env.VITE_Backend_Url;

const authApi = axios.create({
  baseURL: `${API_URL}/user`,
  withCredentials: true,
});

const authService = {
  authenticate: async (mode, data) => {
    const response = await authApi.post(`/${mode}`, data);
    return response.data;
  },
  profile: async()=>{
        const response = await authApi.get("/me");
        return response.data
    }
};

export default authService;
