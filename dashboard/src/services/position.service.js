import axios from "axios";

const API_URL = import.meta.env.VITE_Backend_Url;

const authApi = axios.create({
  baseURL: `${API_URL}/position`,
  withCredentials: true,
});

const positionService = {
  allPosition: async () => {
    const response = await authApi.get(`/positions`);
    return response.data;
  },
};

export default positionService;
