import PageTitle from "@/components/PageTitle";
import FutureTechnologies from "@/components/technologies/FutureTechnologies";

export default function Prospects() {
  return (
    <section>
      <PageTitle>Beyond the Offer: What’s Next for Me</PageTitle>
      <div className="p-5">
        <p className="text-xl text-center">After mastering front-end, I'm diving into backend and cloud tech; next, I'll explore:</p>
        <FutureTechnologies/>
      </div>
    </section>
  );
}
