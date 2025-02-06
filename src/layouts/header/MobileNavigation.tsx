import { cn } from "@/utils/cn";
import NavigationList from "./NavivgationList";
import { useOpenState } from "@/context/OpenStateContext";


export default function MobileNavigation() {
    const { isOpen } = useOpenState()


    const smallDevisesStyles = cn(
        'absolute left-0 right-0 bg-primary transition-opacity top-[101%] duration-500 z-15',
        !isOpen && 'opacity-0 h-0 pointer-events-none ',
        isOpen && `opacity-1 `)

    return (
        <NavigationList className={smallDevisesStyles} />
    );
}
