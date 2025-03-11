import Loader from "@/components/Loader";
import { useSearch } from "../../filter/hooks/useSearch";
import AnimalsListItem from "./AnimalsListItem";

export default function AnimalsList() {
    const {data:animals, isLoading} = useSearch('cat')
    if(isLoading || !animals) return <Loader/>
    return (
        <div className="flex-1 overflow-y-auto custom-scrollbar [direction:rtl] ">
            <div className="[direction:ltr] pl-3 ">
                {animals.map(animal => <AnimalsListItem key={animal.name} animal={animal}/>)}
            </div>
        </div>
    );
}
