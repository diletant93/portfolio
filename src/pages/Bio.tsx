import Education from "@/components/bio/Education";
import PersonalProjects from "@/components/bio/PersonalProjects";
import Skills from "@/components/bio/Skills";
import PageTitle from "@/components/PageTitle";

export default function Bio() {
  return (
    <div >
      <PageTitle>My Journey</PageTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2  p-10 gap-4 justify-items-center h-full">
        <Education />
        <Skills />
        <PersonalProjects className="sm:col-span-2 text-center space-y-6" />
      </div>
    </div>
  );
}
