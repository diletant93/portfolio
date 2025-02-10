import Logo from "@/components/Logo";
import Navigation from "@/components/navigation/Navigation";
import { ToggleMode } from "@/features/ThemeMode";

export default function Header() {
  return (
    <header className="header">
       <Logo/>
       <div className="ml-auto self-stretch border-l border-l-secondary">
        <ToggleMode/>
       </div>
       <Navigation/>
    </header>
  );
}
