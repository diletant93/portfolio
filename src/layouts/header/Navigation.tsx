import { OpenStateProvider } from "@/context/OpenStateContext";
import Burger from "./Burger";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MEDIA_QUERIES } from "@/constants/mediaQueries";

export default function Navigation() {
  const matchesMediumDevices = useMediaQuery(MEDIA_QUERIES.MD)
  return (
    <nav className="ml-auto">
      <OpenStateProvider>
        {matchesMediumDevices ?(
          <DesktopNavigation />
        ):(
          <>
          <div className="md:hidden border-l border-l-white ">
            <Burger />
          </div>
          <MobileNavigation />
          </>
        )}
      </OpenStateProvider>
    </nav>
  );
}
