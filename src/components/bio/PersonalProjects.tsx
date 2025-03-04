import { projectsArray } from "@/constants/projectItems";
import BioHeading from "./BioHeading";
import ProjectCard from "./ProjectCard";

function ProjectsList() {
  return (
    <ul className="flex justify-evenly gap-5">
      {projectsArray.map(project => (
        <ProjectCard key={project.imgUrl} project={project} />
      ))}
    </ul>
  );
}

export default function PersonalProjects({ className }: { className?: string }) {
  return (
    <div className={className}>
      <BioHeading>Personal Projects</BioHeading>
      <ProjectsList />
    </div>
  );
}
