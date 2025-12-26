import axios from "axios";

const API_URL = import.meta.env.VITE_Backend_Url;

const authApi = axios.create({
  baseURL: `${API_URL}/order`,
  withCredentials: true,
});

const orderService = {
  createOrder: async ( data) => {
    const response = await authApi.post(`/createOrder`, data);
    return response.data;
  },
  allOrder: async()=>{
    const response = await authApi.get("/allorders");
    return response.data;
  }
};

export default orderService;
