import { useState } from "react";
import SearchResults from "../../filter/components/SearchResults";
import AnimalsSort from "./AnimalsSort";
import SortListAnimalItem from "./SortListAnimalItem";

export default function SortShowcase() {
  const [option, setOption] = useState<string>('name-desc')
  return (
    <div className="flex w-full justify-between gap-4 h-[12rem]">
       <SearchResults searchValue="dog" sortValue={option} className="flex-1 pl-3" direction="rtl" render={(animal)=><SortListAnimalItem key={animal.name} animal={animal}/>}/>
      <AnimalsSort option={option} setOption={setOption} />
    </div>
  );
}
