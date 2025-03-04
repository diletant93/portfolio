import { SkillItem, skillsList } from "@/constants/skillItems";
import BioHeading from "./BioHeading";
function SkillElement({ skill }: { skill: SkillItem }) {
  return (
    <li className="px-4 py-2 bg-primary border border-secondary text-secondary rounded shadow-sm transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      {skill.name}
    </li>
  );
}

function SkillsList() {
  return (
    <ul className="flex flex-wrap gap-3">
      {skillsList.map((element) => (
        <SkillElement key={element.name} skill={element} />
      ))}
    </ul>
  );
}

export default function Skills() {
  return (
    <div className="max-w-[85%] mx-auto p-6 flex flex-col items-center gap-3">
      <BioHeading>Technical Skills</BioHeading>
      <SkillsList />
    </div>
  );
}
