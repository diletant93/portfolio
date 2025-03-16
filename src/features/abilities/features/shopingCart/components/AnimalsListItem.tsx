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
    <div className="flex flex-col items-center  md:flex-row  md:justify-between border-b border-b-secondary last:border-b-0 sm:p-3 gap-2 mb-2 last:mb-0">
      <p className=" sm:text-left text-center sm:w-auto truncate sm:overflow-visible sm:whitespace-normal sm:[text-overflow:clip]">{animal.name}</p>
      <Button className="shadcn-button w-full md:w-auto" onClick={() => { handleAdd() }} disabled={isAlreadyInTheCart}>{isAlreadyInTheCart ? 'Added' : 'Add'}</Button>
    </div>
  );
}
