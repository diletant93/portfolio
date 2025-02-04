import { navigationItemType } from "@/constants/navigationItems";
import { Link } from "react-router-dom";

export default function NavigationItem({item} : {item:navigationItemType }) {
  return (
    <li>
       <Link to={item.path}>
        {item.label}
       </Link>
    </li>
  );
}
