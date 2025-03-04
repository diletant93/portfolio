import { ChangeEvent, useState } from "react";
import { useDebounce } from "../../debounce/hooks/useDebounce";
import SearchResults from "./SearchResults";
import { Input } from "@/components/ui/input";

export default function FilterShowcase() {
    const [value, setValue] = useState<string>('')
    const [debouncedValue] = useDebounce(value,700)
  return (
    <div className="h-[15rem]">
       <Input
        className="w-full placeholder:text-primary mb-5"
        value={value}
        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setValue(e.target.value)}}
        placeholder="Enter the name of an animal"
       />
       <SearchResults searchValue={debouncedValue}/>
    </div>
  );
}
