import { useEffect, useState } from "react";
import Burger from "./Burger";
import NavivationList from "./NavivationList";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MEDIA_QUERIES } from "@/constants/mediaQueries";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const matchesMediumDevices = useMediaQuery(MEDIA_QUERIES.MD)
  const handleOpen = () => setIsOpen(current => !current)

  useEffect(()=>{
    setIsOpen(matchesMediumDevices)
  },[matchesMediumDevices])  

  return (
    <nav className="ml-auto">
        <div className="md:hidden border-l border-l-white ">
            <Burger onOpen={handleOpen}/>
        </div>
        <NavivationList mediumDevice={matchesMediumDevices} isOpen={isOpen}/>
    </nav>
  );
}
