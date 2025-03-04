import { Animal } from "../../filter/types/animal";

export default function SortListAnimalItem({animal}:{animal:Animal}) {
  return (
    <div className="flex justify-between">
        <p>{animal.name}</p>
        <div>
            {animal.characteristics.lifespan || 'unknown'}
        </div>
    </div>
  );
}