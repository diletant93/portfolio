import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Animal } from "../types/animal";
import { abbreviateRegions } from "@/utils/stringManipulations";
import { MEDIA_QUERIES } from "@/constants/mediaQueries";
export default function AnimalItem({animal}:{animal:Animal}) {
  const matched = useMediaQuery(MEDIA_QUERIES.MD)
  return (
    <div className="flex justify-between border-b last:border-b-0">
         <p>{animal.name}</p>
        <div className="w-1/2 text-right">
            {animal.locations.map((location,index)=> (
              <span key={location}>{matched?location:abbreviateRegions(location)}
              {index === animal.locations.length-1? '': ' / '}{' '}
              </span>
            ))}
        </div>
    </div>
  );
}
