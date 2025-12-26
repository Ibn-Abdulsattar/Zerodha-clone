import axios from "axios";

const API_URL = import.meta.env.VITE_Backend_Url;

const authApi = axios.create({
  baseURL: `${API_URL}/fund`,
  withCredentials: true,
});

const fundService = {
  createfund: async (data) => {
    const response = await authApi.post(`/createFund`, data);
    return response.data;
  },
  allfund: async () => {
    const response = await authApi.get(`/allFund`);
    return response.data;
  },
};

export default fundService;
