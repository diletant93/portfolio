import { navigationItems, navigationItemType } from "@/constants/navigationItems";
import NavigationItem from "./NavigationItem";
import { cn } from "@/utils/cn";

export default function NavivationList({isOpen}:{isOpen:boolean}) {
    const defaultStyles = 'absolute left-0 right-0 bg-primary transition-all top-[101%] duration-500 z-10'
    const smallDevisesStyles =cn(
      defaultStyles,
      !isOpen && 'opacity-0 h-0 pointer-events-none ',
      isOpen && `opacity-1 `

    )
    const largeDevisesStyles = ''
  return (
        <ul className='flex'>
        {navigationItems.map((item:navigationItemType)=>{
            return <NavigationItem key={item.label} item={item}/>
        })}
        </ul>
  );
}
