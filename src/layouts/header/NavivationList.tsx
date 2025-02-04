import { navigationItems, navigationItemType } from "@/constants/navigationItems";
import NavigationItem from "./NavigationItem";

export default function NavivationList() {
  return (
    <div>
       {navigationItems.map((item:navigationItemType)=>{
        return <NavigationItem item={item}/>
       })}
    </div>
  );
}
