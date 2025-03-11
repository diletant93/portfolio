import { Button } from "@/components/ui/button";
import { Animal } from "../../filter/types/animal";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { addAnimal } from "../cartSlice/slice";
import { selectItems } from "../cartSlice/selectors";

export default function AnimalsListItem({ animal }: { animal: Animal }) {
  const dispatch = useDispatch<AppDispatch>()
  const [isAlreadyInTheCart, setIsAlreadyInTheCart] = useState<boolean>(false)
  const currentItems = useSelector(selectItems)

  function handleAdd() {
    dispatch(addAnimal(animal))
  }

  useEffect(() => {
    setIsAlreadyInTheCart(currentItems.some(item => item.animal.name === animal.name))
  }, [currentItems, animal])
  return (
    <div className="flex justify-between border-b border-b-secondary last:border-b-0 p-3 gap-2">
      <p className="w-[160px] sm:w-auto truncate sm:overflow-visible sm:whitespace-normal sm:[text-overflow:clip]">{animal.name}</p>
      <Button className="shadcn-button" onClick={() => { handleAdd() }} disabled={isAlreadyInTheCart}>{isAlreadyInTheCart ? 'Added' : 'Add'}</Button>
    </div>
  );
}
