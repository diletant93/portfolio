import axios from "axios";
import { Animal } from "../types/animal";

const axiosInstance = axios.create({
  baseURL: "https://api.api-ninjas.com/v1",
  headers: {
    "X-Api-Key": import.meta.env.VITE_ANIMALS_API_KEY,
    "Content-Type": "application/json",
  },
});

export async function getAnimals(animalName:string): Promise<Animal[]> {
  try {
    const response = await axiosInstance.get<Animal[]>(`/animals?name=${animalName}`);

    if (response.data.length === 0) {
      throw new Error("Could not find any animals");
    }
    if(response.data.length >= 10){
        return response.data.slice(0,10)
    }
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
