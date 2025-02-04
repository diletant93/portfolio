import Logo from "@/layouts/header/Logo";
import Navigation from "./Navigation";
import { ToggleMode } from "@/features/ThemeMode";

export default function Header() {
  return (
    <header className="relative flex border-b border-b-secondary items-center pl-5 z-20">
       <Logo/>
       <Navigation/>
       {/* <ToggleMode/> */}
    </header>
  );
}
