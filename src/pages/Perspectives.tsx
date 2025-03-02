import PageTitle from "@/components/PageTitle";
import FutureTechnologies from "@/components/technologies/FutureTechnologies";

export default function Perspectives() {
  return (
    <div>
      <PageTitle>Beyond the Offer: What’s Next for Me</PageTitle>
      <div className="p-5 ">
        <p>After mastering front-end development, I want to expand my skill set by diving into backend and cloud technologies. The next areas I’ll explore include:</p>
        <FutureTechnologies/>
      </div>
    </div>
  );
}
