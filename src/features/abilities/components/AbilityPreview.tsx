import { Ability } from "../types/abilityRelated";

export default function AbilityPreview({ability}:{ability:Ability}) {
  return (
    <div className="ability-preview">
       {ability.name}
    </div>
  );
}
