import { TechologyItem } from "@/constants/technologyItems";

export default function TechnologyItem({ technology }: { technology: TechologyItem }) {
  return (
    <li className="py-6">
      <p className="text-secondary font-medium hover:tracking-wider transition-all duration-300 cursor-pointer">
        {technology.name}
      </p>
    </li>
  );
}
