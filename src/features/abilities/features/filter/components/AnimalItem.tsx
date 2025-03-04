import { Animal } from "../types/animal";

export default function AnimalItem({animal}:{animal:Animal}) {
  return (
    <div className="flex justify-between">
        <p>{animal.name}</p>
        <div>
            {animal.locations.map(location=> <span key={location}>{location}{' '}</span>)}
        </div>
    </div>
  );
}
