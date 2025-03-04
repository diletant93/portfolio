import { ChangeEvent, useState } from "react";
import { useDebounce } from "../../debounce/hooks/useDebounce";
import SearchResults from "./SearchResults";

export default function FilterShowcase() {
    const [value, setValue] = useState<string>('')
    const [debouncedValue] = useDebounce(value,300)
  return (
    <div className="">
       <input
        className="w-full placeholder:text-primary text-primary"
        value={value}
        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setValue(e.target.value)}}
        placeholder="Enter the name of an animal"
       />
       <SearchResults searchValue={debouncedValue}/>
    </div>
  );
}
