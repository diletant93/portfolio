import Burger from "./Burger";
import NavivationList from "./NavivationList";

export default function Navigation() {
  return (
    <nav className="ml-auto">
        <div className="flex justify-center items-center px-4 py-5 border-l border-l-white">
            <Burger/>
        </div>
       <NavivationList/>
    </nav>
  );
}
