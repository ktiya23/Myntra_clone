import axios from "axios";

const API_URL = "http://localhost:8080";

export const fetchProducts = async (filters) => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const response = await axios.get(`${API_URL}/auth/products?${queryParams}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
