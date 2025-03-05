import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { fetchAnimals } from "../services/animals";

export function useInfiniteAnimals(){
    const {data, status,error, isFetchingNextPage, fetchNextPage} = useInfiniteQuery({
        queryKey:['infiniteAnimals'],
        queryFn: fetchAnimals,
        initialPageParam:0,
        getNextPageParam:(lastPage) => lastPage.nextPage,
    })
    const queryClient = useQueryClient()
    const resetAnimals = () => queryClient.removeQueries({ queryKey: ['infiniteAnimals'] });

    return {data , status, error, isFetchingNextPage, fetchNextPage,resetAnimals}
}