import BigSocials from "@/components/BigSocials";
import Heading from "@/components/Heading";
import IntroSection from "@/components/home/IntroSection";;

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <Heading className="text-center py-10 px-2 tracking-wider uppercase border-b border-b-secondary">Hey, I'm Artur. I build stuff for the web.</Heading>
      <IntroSection/>
      <BigSocials/>
    </div>
  );
}
