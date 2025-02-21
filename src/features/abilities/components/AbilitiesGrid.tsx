import { AuthProvider } from "../features/authentication/context/AuthContext";
import MainGrid from "./MainGrid";
import SubGrid from "./SubGrid";

export default function AbilitiesGrid() {
  return (
    <div>
        <MainGrid />
        <SubGrid />
    </div>
  );
}
