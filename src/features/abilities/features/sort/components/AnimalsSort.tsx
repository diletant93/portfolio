import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import AnimalsSortList from "./AnimalsSortList";
import { SetStateAction, useState } from "react";

type AnimalsSortProps = {
  option:string;
  setOption: React.Dispatch<SetStateAction<string>>;
}
export default function AnimalsSort({option, setOption}:AnimalsSortProps) {
  return (
    <Select value={option} onValueChange={(value:string) => setOption(value)}>
    <SelectTrigger className="max-w-[30%] shadcn-selector-trigger">
      <SelectValue placeholder="name-desc" />
    </SelectTrigger>
    <SelectContent>
      <AnimalsSortList/>
    </SelectContent>
  </Select>
  );
}
