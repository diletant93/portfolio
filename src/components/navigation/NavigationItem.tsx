import { navigationItemType } from "@/constants/navigationItems";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function NavigationItem({item,className} : {item:navigationItemType, className?:string }) {
  return (
    <li className={cn("border-b border-b-secondary md:border-b-0 md:border-l md:border-l-secondary hover:bg-secondary hover:text-primary cursor-pointer  uppercase font-extrabold",className)}>
       <Link to={item.path} className="block px-4 py-5">
        {item.label}
       </Link>
    </li>
  );
}
