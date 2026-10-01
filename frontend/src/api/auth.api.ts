import axios from "axios";

const API_URL = "http://localhost:3000";

export const loginApi = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    username,
    password,
  });

  return response.data;
};
