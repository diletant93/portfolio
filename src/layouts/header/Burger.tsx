import Button from "@/components/ui/Button";
import { useOpenState } from "@/context/OpenStateContext";
import { cn } from "@/utils/cn";

export default function Burger() {
    const {setIsOpen} = useOpenState()
    const lineStyles = "block w-5 bg-secondary h-[2px] group-hover:scale-x-[1.20]  transition-all duration-300 origin-right"
    return (
        <Button onClick={()=>setIsOpen(curr => !curr)} className="group border-0 px-4 py-5 hover:bg-transparent  ">
            <span className={cn(lineStyles,'group-hover:-translate-y-[2px]')}></span>
            <span className={cn(lineStyles, 'w-3 self-end my-2 ml-auto ')}></span>
            <span className={cn(lineStyles,'group-hover:translate-y-[2px]')}></span>
        </Button>
    );
}
