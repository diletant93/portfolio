import AnimalsListItem from "./AnimalsListItem";
import { Animal } from "../../filter/types/animal";

export default function AnimalsList({animals}:{animals:Animal[] | undefined}) {
    return (
        <div className="flex-1 overflow-y-auto custom-scrollbar [direction:rtl] ">
            <div className="[direction:ltr] pl-3 ">
                {animals && animals.map(animal => <AnimalsListItem key={animal.name} animal={animal}/>)}
            </div>
        </div>
    );
}
