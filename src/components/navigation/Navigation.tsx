import { useOpenState } from "@/context/OpenStateContext";
import Burger from "./Burger";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MEDIA_QUERIES } from "@/constants/mediaQueries";
import useClickOutside from "@/hooks/useClickOutside";

export default function Navigation() {
  const matchesMediumDevices = useMediaQuery(MEDIA_QUERIES.MD)

  const {setIsOpen } = useOpenState()
  const closeList = () => setIsOpen(false)

  const ref = useClickOutside<HTMLDivElement>(closeList, false)

  return (
    <nav className='md:w-[50%]'>
        {matchesMediumDevices ? (
          <DesktopNavigation />
        ) : (
          <div ref={ref}>
            <div className="border-l border-l-secondary z-50">
              <Burger />
            </div>
            <MobileNavigation />
          </div>
        )}
    </nav>
  );
}
