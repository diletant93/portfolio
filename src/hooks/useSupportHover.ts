import { useEffect, useState } from "react";

export function useSupportHover(){
    const [isSupportsHover, setIsSupportsHover] = useState<boolean>(true)

    useEffect(()=>{
        const mediaQuery = window.matchMedia('(hover: hover)')
        setIsSupportsHover(mediaQuery.matches)

        const handleChange = (e:MediaQueryListEvent | MediaQueryList) => setIsSupportsHover(e.matches)
        mediaQuery.addEventListener('change',handleChange)
        return () => mediaQuery.removeEventListener('change',handleChange)
    },[])

    return [isSupportsHover]
}