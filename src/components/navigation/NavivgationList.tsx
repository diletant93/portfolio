import { navigationItems, navigationItemType } from "@/constants/navigationItems";
import NavigationItem from "./NavigationItem";
import { cn } from "@/lib/utils";
import { useOpenState } from "@/context/OpenStateContext";
import useClickOutside from "@/hooks/useClickOutside";

export default function NavigationList({ className, render }: { className?: string, render?: (item: navigationItemType) => React.ReactNode }) {
  const { setIsOpen } = useOpenState()
  const closeList = () => setIsOpen(false)
  const ref = useClickOutside<HTMLUListElement>(closeList,false)
  
  return (
    <ul className={cn(className || '')} ref={ref}>
      {navigationItems.map((item: navigationItemType) => {
        return render ? render(item) : <NavigationItem key={item.label} item={item} />
      })}
    </ul>
  );
}
