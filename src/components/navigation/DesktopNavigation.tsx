import { navigationItemType } from "@/constants/navigationItems";
import NavigationList from "./NavivgationList";
import NavigationItem from "./NavigationItem";

export default function DesktopNavigation() {
  const renderDesktopNavigationItem = (item:navigationItemType) => <DestktopNavigationItem key={item.label} item={item}/>
  return (
    <NavigationList className="flex" render={renderDesktopNavigationItem}/>
  );
}

function DestktopNavigationItem({item}:{item:navigationItemType}){
  return (
    <NavigationItem  key={item.label} item={item} className="flex-1 text-center" />
  )
}