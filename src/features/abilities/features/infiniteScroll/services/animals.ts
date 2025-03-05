import { Animal } from "../../filter/types/animal"
import { axiosInstance } from "@/lib/axios/config"
import { FetchAnimalsResult } from "../types/requestResults"
import { LIMIT } from "../constants/pagination"


export async function fetchAnimals({pageParam}:{pageParam:number}):Promise<FetchAnimalsResult>{
    try {
        const response = await axiosInstance.get<Animal[]>(`/animals?name=cat`)
        console.log('inside fetchAnimals', response)
        if(response.data.length <=0 ) throw new Error('Could not fetch the animal')
        return {
            data: response.data.slice(pageParam, pageParam + LIMIT),
            currentPage:pageParam,
            nextPage:pageParam + LIMIT < response.data.length? pageParam + LIMIT : null
        }
    } catch (error) {
        console.log(error)
        throw error
    }
}