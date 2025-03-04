import { SelectItem } from "@/components/ui/select";

export default function AnimalsSortItem({option}:{option:string}) {
  return (
    <SelectItem className="shadcn-selector-item" value={option}>{option}</SelectItem>
  );
}
