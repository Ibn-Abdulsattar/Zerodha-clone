import axios from "axios";

const API_URL = import.meta.env.VITE_Backend_Url;

const authApi = axios.create({
  baseURL: `${API_URL}/holding`,
  withCredentials: true,
});

const holdingService = {
  allholding: async () => {
    const response = await authApi.get("/holdings");
    return response.data;
  },
};

export default holdingService;
