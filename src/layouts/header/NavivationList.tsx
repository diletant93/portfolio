import { navigationItems, navigationItemType } from "@/constants/navigationItems";
import NavigationItem from "./NavigationItem";

export default function NavivationList() {
  return (
        <ul className="hidden sm:flex">
        {navigationItems.map((item:navigationItemType)=>{
            return <NavigationItem key={item.label} item={item}/>
        })}
        </ul>
  );
}
