import { subAbilitiesList } from "../constants/abilitiesList";
import { Ability } from "../types/abilityRelated";
import AbilityCard from "./AbilityCard";

export default function SubGrid() {
  return (
    <div className="abilities-grid lg:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))">
        {subAbilitiesList.map((ability:Ability)=><AbilityCard key={ability.name} ability={ability}/>)}
    </div>
  );
}
