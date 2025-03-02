import { subAbilitiesList } from "../constants/abilitiesList";
import { Ability } from "../types/abilityRelated";
import ModalCard from "./ModalCard";

export default function SubGrid() {
  return (
    <div className="abilities-grid lg:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))">
      {subAbilitiesList.map((ability: Ability) => <ModalCard key={ability.name} ability={ability} />)}
    </div>
  );
}
