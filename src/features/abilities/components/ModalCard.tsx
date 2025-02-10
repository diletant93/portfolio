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
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
      {ability.abilityCopmonent}
    </DialogContent>
  </Dialog>
  
  );
}
