import { ChangeEvent, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { Input } from "@/components/ui/input";
import Separator from "@/features/abilities/components/Separator";

export default function DebounceShowcase() {
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [debouncedValue] = useDebounce(value2, 300);

  return (
    <div className="flex md:flex-row flex-col w-full overflow-hidden md:gap-0 gap-5">
      <div className="md:w-[calc(50%-1px)] overflow-hidden">
        <label htmlFor="noDebounce" className="text-sm font-medium mb-1 block">
          Without debounce
        </label>
        <Input
          type="text"
          value={value1}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue1(e.target.value)}
          id="noDebounce"
          className="w-full p-2 border rounded-md"
        />
        <p className="mt-2 truncate" title={value1}>
          Result: {value1}
        </p>
      </div>
      <Separator/>

      <div className="md:w-[calc(50%-1px)] overflow-hidden">
        <label htmlFor="withDebounce" className="text-sm font-medium mb-1 block">
          With debounce
        </label>
        <Input
          type="text"
          value={value2}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue2(e.target.value)}
          id="withDebounce"
          className="w-full p-2 border rounded-md"
        />
        <p className="mt-2 truncate" title={debouncedValue}>
          Result: {debouncedValue}
        </p>
      </div>
    </div>
  );
}