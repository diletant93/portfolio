import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Animal } from "../../filter/types/animal";
import { MEDIA_QUERIES } from "@/constants/mediaQueries";
import { abbreviateName, formatAgeRange } from "@/utils/stringManipulations";

export default function SortListAnimalItem({animal}:{animal:Animal}) {
  const matched = useMediaQuery(MEDIA_QUERIES.MD)
  let lifespan: string = ''
  if(!matched){
    lifespan = formatAgeRange(animal.characteristics.lifespan) || 'unknown'
  }else{
    lifespan = animal.characteristics.lifespan || 'unknown'
  }
  return (
    <div className="flex justify-between  border-b last:border-b-0">
        <p className="flex-1">{matched?animal.name: abbreviateName(animal.name)}</p>
        <div className=" text-right">
            {lifespan}
        </div>
    </div>
  );
}