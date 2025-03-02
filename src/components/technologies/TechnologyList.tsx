import { technologyList, TechologyItem } from "@/constants/technologyItems";
import TechnologyItem from "./TechnologyItem";

export default function TechnologyList() {
  return (
    <ul className="flex flex-col gap-5">
      {technologyList.map((technology:TechologyItem) => <TechnologyItem key={technology.name} technology={technology}/>)}
    </ul>
  );
}
