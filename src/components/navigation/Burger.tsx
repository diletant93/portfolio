import { useOpenState } from "@/context/OpenStateContext";
import { cn } from "@/utils/cn";
import { Button } from "../ui/button";

export default function Burger() {
    const {setIsOpen} = useOpenState()
    const lineStyles = "w-5 bg-white h-[2px] group-hover:scale-x-[1.20]  transition-all duration-300 origin-right"
    return (
        <Button onClick={()=>setIsOpen(curr => !curr)} className="group shadcn-burger-button border-0">
            <span className={cn(lineStyles,'group-hover:-translate-y-[2px]')}></span>
            <span className={cn(lineStyles, 'w-3 self-end my-1 ml-auto')}></span>
            <span className={cn(lineStyles,'group-hover:translate-y-[2px]')}></span>
        </Button>
    );
}
