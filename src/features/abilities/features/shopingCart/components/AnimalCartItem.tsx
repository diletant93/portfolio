import { useDispatch } from "react-redux";
import { CartItem } from "../types/cartSliceRelated";
import Controls from "./Controls";
import { AppDispatch } from "@/store/store";
import { addAnimal, removeAnimal, setAnimalQuantity } from "../cartSlice/slice";
import { Controllable } from "../types/controls";
import { Animal } from "../../filter/types/animal";

export default function AnimalCartItem({animalItem}:{animalItem:CartItem}) {
  const dispatch = useDispatch<AppDispatch>()
  function handleAdd(item: Animal & Controllable){
    console.log(item)
    dispatch(addAnimal(item as Animal))
  } 
  function handleRemove(item: Animal & Controllable){
    dispatch(removeAnimal(item.name))
  }
  function handleSetQuantity(item:Animal & Controllable , quantity:number){
    dispatch(setAnimalQuantity({name:item.name, quantity}))
  }
  return (
    <div className="flex justify-between border-b border-b-secondary last:border-b-0 p-3 gap-2">
       <p className="w-[160px] sm:w-auto truncate sm:overflow-visible sm:whitespace-normal sm:[text-overflow:clip]">{animalItem.animal.name}</p>
       <Controls
        item={{id:animalItem.animal.name , quantity: animalItem.quantity, ...animalItem.animal}} 
        onDecrease={handleRemove}
        onIncrease={handleAdd}
        onSetQuantity={handleSetQuantity}
        min={0}
        max={99}
        />
    </div>
  );
}
