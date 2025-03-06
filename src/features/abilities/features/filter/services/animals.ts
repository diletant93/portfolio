import { Animal } from "../types/animal";
import { axiosInstance } from "@/lib/axios/config";

export async function getAnimals(animalName:string, limit=10): Promise<Animal[]> {
  try {
    const response = await axiosInstance.get<Animal[]>(`/animals?name=${animalName}`);

    if (response.data.length === 0) {
      throw new Error("Could not find any animals");
    }
    if(response.data.length >= limit){
        return response.data.slice(0,10)
    }
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
