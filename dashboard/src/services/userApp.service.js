import axios from "axios";

const API_URL = import.meta.env.VITE_Backend_Url;

const authApi = axios.create({
  baseURL: `${API_URL}/userApp`,
  withCredentials: true,
});

const userAppService = {
  allUserApp: async () => {
    const response = await authApi.get(`/user-apps`);
    return response.data;
  },
  toggleApp: async (mode, data) => {
    const response = await authApi.post(`/user-apps/${mode}`, data);
    return response.data;
  },
};

export default userAppService;
