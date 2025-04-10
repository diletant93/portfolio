import { ProjectEntity } from "@/constants/projectItems";
import { useSupportHover } from "@/hooks/useSupportHover";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }: { project: ProjectEntity }) {
  const [supportsHover] = useSupportHover()
  return (
    <Link
      to={project.projectUrl}
      target="_blank"
      className={cn("flex flex-col border border-secondary group relative flex-1 bg-primary outline outline-secondary outline-2 rounded-sm shadow-md hover:shadow-xl overflow-hidden transform  transition-all duration-300 cursor-pointer",
        supportsHover && 'hover:scale-105'
      )}
    >
      <div className="relative w-full h-60 overflow-hidden">
        <img
          src={project.imgUrl}
          alt={project.title}
          className={cn("object-cover w-full h-full transition-transform duration-300",
            supportsHover && 'group-hover:scale-110'
          )}
        />
        <div className={cn('absolute inset-0 bg-secondary opacity-100 flex items-center justify-center transform translate-y-full group-hover:translate-y-0  transition-transform  duration-300',
          !supportsHover && 'hidden'
        )}>
          <span className="text-primary text-2xl uppercase">View Project</span>
        </div>
      </div>
      <div className="p-4 flex-1 flex-center">
        <h4 className="text-center font-semibold text-secondary underline underline-offset-2">
          {project.title}
        </h4>
      </div>
    </Link>
  );
}
