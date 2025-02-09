import Heading from "@/components/Heading";
import AbilitiesGrid from "@/features/abilities/components/AbilitiesGrid";

export default function Abilities() {
  return (
    <div>
        <div className="text-center py-10 border-b border-b-secondary">
            <Heading >Here is what i am capable of...</Heading>
        </div>
        <AbilitiesGrid/>
    </div>
  );
}
