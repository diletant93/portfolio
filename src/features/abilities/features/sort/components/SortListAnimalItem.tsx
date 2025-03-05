import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Animal } from "../../filter/types/animal";
import { MEDIA_QUERIES } from "@/constants/mediaQueries";
import { abbreviateName } from "@/utils/stringManipulations";

export default function SortListAnimalItem({animal}:{animal:Animal}) {
  const matched = useMediaQuery(MEDIA_QUERIES.MD)

  return (
    <div className="flex justify-between  border-b last:border-b-0">
        <p>{matched?animal.name: abbreviateName(animal.name)}</p>
        <div className="">
            {animal.characteristics.lifespan || 'unknown'}
        </div>
    </div>
  );
}