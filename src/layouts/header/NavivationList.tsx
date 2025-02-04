import { navigationItems, navigationItemType } from "@/constants/navigationItems";
import NavigationItem from "./NavigationItem";
import { cn } from "@/utils/cn";

export default function NavivationList() {
    const smallDevisesStyles = '' 
    const largeDevisesStyles = ''
  return (
        <ul className='absolute top-[101%] left-0 right-0 bg-primary '>
        {navigationItems.map((item:navigationItemType)=>{
            return <NavigationItem key={item.label} item={item}/>
        })}
        </ul>
  );
}
