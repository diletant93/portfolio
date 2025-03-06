import { useQuery } from "@tanstack/react-query";
import { getAnimals } from "../services/animals";
function useSearch(animalName:string, limit?:number) {
  const { isLoading, data } = useQuery({
    queryKey: ["animals",animalName],
    queryFn: () => getAnimals(animalName,limit),
    retry:false,
  });
  return { isLoading, data };
}

export { useSearch };