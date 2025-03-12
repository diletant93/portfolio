import { OpenStateProvider } from "@/context/OpenStateContext";
import Burger from "./Burger";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MEDIA_QUERIES } from "@/constants/mediaQueries";

export default function Navigation() {
  const matchesMediumDevices = useMediaQuery(MEDIA_QUERIES.MD)
  return (
    <nav className='md:w-[50%]'>
      <OpenStateProvider>
        {matchesMediumDevices ?(
          <DesktopNavigation />
        ):(
          <>
          <div className="border-l border-l-secondary z-50">
            <Burger />
          </div>
          <MobileNavigation/>
          </>
        )}
      </OpenStateProvider>
    </nav>
  );
}
