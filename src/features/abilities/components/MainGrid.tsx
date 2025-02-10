import { mainAbilitiesList } from "../constants/abilitiesList";
import { Ability } from "../types/abilityRelated";
import ModalCard from "./ModalCard";

export default function MainGrid() {
  return (
    <div className="abilities-grid lg:grid-cols-[repeat(auto-fit,minmax(28rem,1fr))]">
       {mainAbilitiesList.map((ability:Ability)=><ModalCard key={ability.name} ability={ability}/>)}
    </div>
  );
}
