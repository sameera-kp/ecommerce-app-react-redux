import axios from "axios";
const API = "https://fakestoreapi.com";

export const getCategories = async () => {
  const res = await axios.get(`${API}/products/categories`);
  return res.data;
};
