import Education from "@/components/bio/Education";
import PersonalProjects from "@/components/bio/PersonalProjects";
import Skills from "@/components/bio/Skills";
import PageTitle from "@/components/PageTitle";

export default function Bio() {
  return (
    <div className="h-full flex flex-col">
      <PageTitle>My Journey</PageTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2  p-10 gap-4 justify-items-center flex-1">
        <Education />
        <Skills />
        <PersonalProjects className="sm:col-span-2 w-full lg:w-2/3 text-center space-y-6" />
      </div>
    </div>
  );
}
