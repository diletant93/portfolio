import Education from "@/components/bio/Education";
import PersonalProjects from "@/components/bio/PersonalProjects";
import Skills from "@/components/bio/Skills";
import PageTitle from "@/components/PageTitle";

export default function Bio() {
  return (
    <section className="bio h-full flex flex-col">
      <PageTitle>My Journey</PageTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 auto-row-[minmax(auto,50%)] px-5 pb-5 md:p-10  justify-items-center flex-1">
        <Education />
        <Skills />
        <PersonalProjects className="md:col-span-2 w-full lg:w-2/3 text-center space-y-6" />
      </div>
    </section>
  );
}
