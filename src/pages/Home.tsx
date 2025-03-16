import BigSocials from "@/components/BigSocials";
import IntroSection from "@/components/home/IntroSection";
import PageTitle from "@/components/PageTitle";
;

export default function Home() {
  return (
    <section className="h-full flex flex-col">
      <PageTitle>Hey, I'm Artur. I build stuff for the web.</PageTitle>
      <IntroSection/>
      <BigSocials/>
    </section>
  );
}
