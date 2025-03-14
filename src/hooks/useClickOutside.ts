import { useEffect, useRef } from "react"

type Handler = (e:MouseEvent | TouchEvent) => void
//we accepts a handler and the capture option which will define if the event should be catched on the capture phase or on the bubble phase
export default function useClickOutside<T extends HTMLElement = HTMLElement>(handler:Handler, capture:boolean = true) {
    const ref = useRef<T>(null)//we expect any type of HTMLELement so we could use it for any element\
    useEffect(()=>{
        const listener = (e:MouseEvent | TouchEvent) =>{
            const target = e.target as Node
            if(!ref.current || ref.current.contains(target)){
                return // the idea is to wear this listener on the document element
                //then if we click on the document element we will close the ref
                //if we click on the ref then we won't close and just return
            }
            handler(e)
        }
        document.addEventListener('mousedown',listener,capture)
        document.addEventListener('touchstart',listener,capture)

        return () =>{
            document.removeEventListener('mousedown',listener,capture)
            document.removeEventListener('touchstart',listener,capture)
        }
    },[handler,capture])
    return ref
}
