import { useEffect, useState } from "react";

export function useDebounce<T>(value:T, time:number){
    const [debouncedValue, setDebouncedValue] = useState<T>(value)
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setDebouncedValue(value)
        },time)
        return () => clearTimeout(timeout)
    },[value,time])
    return [debouncedValue]
}