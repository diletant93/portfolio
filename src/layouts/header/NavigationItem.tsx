import { navigationItemType } from "@/constants/navigationItems";

export default function NavigationItem({item} : {item:navigationItemType }) {
  return (
    <div>
       {item.label}
    </div>
  );
}
