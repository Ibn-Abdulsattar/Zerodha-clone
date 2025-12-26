import axios from "axios";

const API_URL = import.meta.env.VITE_Backend_Url;

const authApi = axios.create({
  baseURL: `${API_URL}/withdraw`,
  withCredentials: true,
});

const withdrawService = {
  withdraw: async ( data) => {
    const response = await authApi.post(`/withdraw`, data);
    return response.data;
  },
};

export default withdrawService;
