import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

export default function Burger() {
    const lineStyles = "block w-5 bg-secondary h-[2px]"
    return (
        <Button className="border-0 p-0 hover:bg-transparent hover:scale-x-150 hover:scale-y-125 transition-all origin-right">
            <span className={lineStyles}></span>
            <span className={cn(lineStyles, 'w-3 self-end my-2 ml-auto')}></span>
            <span className={lineStyles}></span>
        </Button>
    );
}
