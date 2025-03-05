import { useEffect } from "react";
import AnimalItem from "../../filter/components/AnimalItem";
import { useInfiniteAnimals } from "../hooks/useInfiniteAnimals";
import Loader from "@/components/Loader";
import {useInView} from 'react-intersection-observer'

export default function InfiniteScrollShowcase() {
    const {data , status, error, isFetchingNextPage, fetchNextPage, resetAnimals} = useInfiniteAnimals()

    const {ref ,inView} = useInView()

    useEffect(()=>{
        resetAnimals()
    },[])

    useEffect(()=>{
        if(inView) fetchNextPage()
    },[inView, fetchNextPage])

    if(status === 'error') return <div>{error?.message}</div>
    if(status === 'pending' || !data) return <Loader/>
    return (
        <div className="search-list">
            {data.pages.map((page) =>(
                <>
                {page.data.map((animal)=>(
                    <AnimalItem key={animal.name} animal={animal}/>
                ))}
                </>
            ))}
            <div ref={ref}>{isFetchingNextPage && <p className="p-1 text-center">Loading</p>}</div>
        </div>
    );
}
