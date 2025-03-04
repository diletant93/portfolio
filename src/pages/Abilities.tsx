import PageTitle from "@/components/PageTitle";
import AbilitiesGrid from "@/features/abilities/components/AbilitiesGrid";

export default function Abilities() {
  return (
    <div className="flex flex-col min-h-full">
        <PageTitle>Here is what i am capable of...</PageTitle>
        <AbilitiesGrid/>
    </div>
  );
} 
