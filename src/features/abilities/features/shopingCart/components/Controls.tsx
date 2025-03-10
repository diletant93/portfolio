import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { selectVariable } from "../cartSlice/selectors";
import { AppDispatch } from "@/store/store";
import { showVariable, showVariableAsync } from "../cartSlice/slice";

export default function Controls() {
    const variable = useSelector(selectVariable)
    const dispatch = useDispatch<AppDispatch>()
  return (
    <div className="flex gap-2 items-center ">
       <Button className="shadcn-button" onClick={()=>dispatch(showVariableAsync())}>-</Button>
       <Input placeholder="1" className="shadcn-button w-[2rem]"/>
       <Button className="shadcn-button">+</Button>
    </div>
  );
}
