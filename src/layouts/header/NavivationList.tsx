import { navigationItems, navigationItemType } from "@/constants/navigationItems";
import NavigationItem from "./NavigationItem";

export default function NavivationList() {
  return (
    <nav className="hidden sm:block">
        <ul className="flex">
        {navigationItems.map((item:navigationItemType)=>{
            return <NavigationItem item={item}/>
        })}
        </ul>
    </nav>
  );
}
