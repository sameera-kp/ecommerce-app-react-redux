// src/services/authService.js
import axios from "axios";

const API_URL = "https://fakestoreapi.com"; // Example API

export const loginUser = async (username, password) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, {
      username,
      password,
    });
    return res.data; // Usually { token, user }
  } catch (err) {
    throw err.response?.data || { message: "Login failed" };
  }
};
