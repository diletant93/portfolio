import Logo from "@/components/Logo";
import Navigation from "@/components/navigation/Navigation";
import { OpenStateProvider } from "@/context/OpenStateContext";
import { ToggleMode } from "@/features/ThemeMode";

export default function Header() {
  return (
    <header className="header">
       <Logo/>
       <div className="ml-auto self-stretch border-l border-l-secondary">
        <ToggleMode/>
       </div>
       <OpenStateProvider>
          <Navigation/>
       </OpenStateProvider>
    </header>
  );
}
