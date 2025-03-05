import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://api.api-ninjas.com/v1",
    headers: {
      "X-Api-Key": import.meta.env.VITE_ANIMALS_API_KEY,
      "Content-Type": "application/json",
    },
  });
  