import { navigationItems, navigationItemType } from "@/constants/navigationItems";
import NavigationItem from "./NavigationItem";
import { cn } from "@/lib/utils";

export default function NavigationList({ className, render }: { className?: string, render?: (item: navigationItemType) => React.ReactNode }) {
  return (
    <ul className={cn(className || '')} >
      {navigationItems.map((item: navigationItemType) => {
        return render ? render(item) : <NavigationItem key={item.label} item={item} />
      })}
    </ul>
  );
}
