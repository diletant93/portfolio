import PageSummary from "@/components/PageSummary";
import PageTitle from "@/components/PageTitle";
import AbilitiesGrid from "@/features/abilities/components/AbilitiesGrid";

export default function Abilities() {
  return (
    <div className="flex flex-col min-h-full overflow-hidden">
        <PageTitle>Here is what i am capable of...</PageTitle>
        <AbilitiesGrid/>
        <PageSummary>And much more...</PageSummary>
    </div>
  );
} 
