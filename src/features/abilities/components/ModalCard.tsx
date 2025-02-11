import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Ability } from "../types/abilityRelated";
import AbilityPreview from "./AbilityPreview";
  
export default function ModalCard({ability}:{ability:Ability}) {
  return (
    <Dialog>
    <DialogTrigger className="w-full">
        <AbilityPreview ability={ability}/>
    </DialogTrigger>
    <DialogContent className="shadcn-card-dialog-content">
      <DialogHeader>
        <DialogTitle>{ability.heading}</DialogTitle>
        <DialogDescription>
          {ability.description}
        </DialogDescription>
      </DialogHeader>
      {ability.abilityCopmonent}
    </DialogContent>
  </Dialog>
  
  );
}
