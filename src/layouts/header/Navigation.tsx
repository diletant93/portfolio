import { useState } from "react";
import Burger from "./Burger";
import NavivationList from "./NavivationList";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const handleOpen = () => setIsOpen(current => !current)
  return (
    <nav className="ml-auto">
        <div className="md:hidden border-l border-l-white ">
            <Burger onOpen={handleOpen}/>
        </div>
        <NavivationList isOpen={isOpen}/>
    </nav>
  );
}
