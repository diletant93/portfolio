import MainGrid from "./MainGrid";
import SubGrid from "./SubGrid";

export default function AbilitiesGrid() {
  return (
    <div className="flex-1 grid grid-cols-1 grid-rows-[25%_75%] border-b border-b-secondary">
      <MainGrid />
      <SubGrid />
    </div>
  );
}