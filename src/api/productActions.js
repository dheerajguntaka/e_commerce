import axios from "axios";

const BASE_URL = "https://api.tvmaze.com";

export const fetchProducts = async () => {
  const res = await axios.get(`${BASE_URL}/shows`);
  return res.data;
};

export const fetchProductById = async (id) => {
  const res = await axios.get(`${BASE_URL}/shows/${id}`);
  return res.data;
};