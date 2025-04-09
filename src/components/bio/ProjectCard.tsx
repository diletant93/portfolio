import { ProjectEntity } from "@/constants/projectItems";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }: { project: ProjectEntity }) {
  return (
    <Link
      to={project.projectUrl}
      target="_blank"
      className="flex flex-col group relative flex-1 bg-primary outline outline-secondary outline-2 rounded-sm shadow-md hover:shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      <div className="relative w-full h-60 overflow-hidden">
        <img
          src={project.imgUrl}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-secondary opacity-70 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-primary text-2xl uppercase">View Project</span>
        </div>
      </div>
      <div className="p-4 flex-1 flex-center">
        <h4 className="text-center font-semibold text-secondary">
          {project.title}
        </h4>
      </div>
    </Link>
  );
}
