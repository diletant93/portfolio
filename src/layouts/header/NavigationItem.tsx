import { navigationItemType } from "@/constants/navigationItems";
import { Link } from "react-router-dom";

export default function NavigationItem({item} : {item:navigationItemType }) {
  return (
    <li className="border-b border-b-secondary md:border-b-0 md:border-l md:border-l-secondary hover:bg-secondary hover:text-primary cursor-pointer  uppercase font-extrabold">
       <Link to={item.path} className="block px-4 py-5">
        {item.label}
       </Link>
    </li>
  );
}
