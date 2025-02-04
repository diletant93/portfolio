import { navigationItemType } from "@/constants/navigationItems";
import { Link } from "react-router-dom";

export default function NavigationItem({item} : {item:navigationItemType }) {
  return (
    <li className="border-b border-b-secondary hover:bg-secondary hover:text-primary cursor-pointer px-4 py-5 uppercase font-extrabold">
       <Link to={item.path}>
        {item.label}
       </Link>
    </li>
  );
}
