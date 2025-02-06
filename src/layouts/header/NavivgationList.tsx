import { navigationItems, navigationItemType } from "@/constants/navigationItems";
import NavigationItem from "./NavigationItem";
import { cn } from "@/lib/utils";

export default function NavigationList({className}:{className?:string}) {
  return (
    <ul className={cn(className || '')}>
      {navigationItems.map((item: navigationItemType) => {
        return <NavigationItem key={item.label} item={item} />
      })}
    </ul>
  );
}
