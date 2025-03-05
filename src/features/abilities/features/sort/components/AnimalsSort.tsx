import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import AnimalsSortList from "./AnimalsSortList";
import { SetStateAction, useState } from "react";
import { cn } from "@/lib/utils";

type AnimalsSortProps = {
  option:string;
  setOption: React.Dispatch<SetStateAction<string>>;
  className?:string;
}
export default function AnimalsSort({option, setOption, className}:AnimalsSortProps) {
  return (
    <Select value={option} onValueChange={(value:string) => setOption(value)}>
    <SelectTrigger className={cn("max-w-[30%] shadcn-selector-trigger", className)}>
      <SelectValue placeholder="name-desc" />
    </SelectTrigger>
    <SelectContent>
      <AnimalsSortList/>
    </SelectContent>
  </Select>
  );
}
