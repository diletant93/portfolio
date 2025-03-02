import { TechologyItem } from "@/constants/technologyItems";

export default function TechnologyItem({technology}:{technology:TechologyItem}) {
  return (
    <div className="w-2/5 border-b border-b-secondary">
        <p className="hover:tracking-widest transition-all duration-300 cursor-pointer">
            {technology.name}
        </p>
    </div>
  );
}
