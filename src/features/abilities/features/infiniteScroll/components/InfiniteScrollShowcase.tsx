import { useEffect } from "react";
import AnimalItem from "../../filter/components/AnimalItem";
import { useInfiniteAnimals } from "../hooks/useInfiniteAnimals";
import Loader from "@/components/Loader";
import {useInView} from 'react-intersection-observer'

export default function InfiniteScrollShowcase() {
    const {data , status, error, isFetchingNextPage, fetchNextPage, resetAnimalsIfCached} = useInfiniteAnimals()

    const {ref ,inView} = useInView()

    useEffect(()=>{
        resetAnimalsIfCached()
    },[])

    useEffect(()=>{
        if(inView) fetchNextPage()
    },[inView, fetchNextPage])

    console.log('data',data)
    if(status === 'error') return <div>{error?.message}</div>
    if(status === 'pending' || !data) return <div className="h-[15rem]"><Loader/></div>
    return (
        <div className="search-list h-[15rem]">
            {data.pages.map((page) => (
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
