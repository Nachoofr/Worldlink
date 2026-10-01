import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:5002";

type JWTPayload = {
  id: number;
};

export const getUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("token not found");
  }

  const userId = jwtDecode<JWTPayload>(token);

  const response = await axios.get(`${API_URL}/user/${userId.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
