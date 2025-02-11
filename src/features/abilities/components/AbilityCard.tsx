import { Ability } from "../types/abilityRelated";

export default function AbilityCard({ability}:{ability:Ability}) {
  return (
    <div className="px-5 py-3  w-full flex-center flex-col cursor-pointer">
        {ability.name}
    </div>
  );
}
