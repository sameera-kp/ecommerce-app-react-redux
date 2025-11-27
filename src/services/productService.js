import axios from "axios";

const API = "https://fakestoreapi.com";

export const getProducts = async () => {
  const res = await axios.get(`${API}/products`);
  return res.data;
};

export const getProductById = async (id) => {
  const res = await axios.get(`${API}/products/${id}`);
  return res.data;
};
