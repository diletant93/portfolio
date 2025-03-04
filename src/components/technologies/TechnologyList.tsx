import { technologyList, TechologyItem } from "@/constants/technologyItems";
import TechnologyItem from "./TechnologyItem";

export default function TechnologyList() {
  return (
    <ul className="divide-y divide-secondary">
      {technologyList.map((technology: TechologyItem) => (
        <TechnologyItem key={technology.name} technology={technology} />
      ))}
    </ul>
  );
}
