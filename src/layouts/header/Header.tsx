import Logo from "@/layouts/header/Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex justify-between">
       <Logo/>
       <Navigation/>
    </header>
  );
}
