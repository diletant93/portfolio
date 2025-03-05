import Loader from "@/components/Loader";
import { useSearch } from "../hooks/useSearch";
import AnimalItem from "./AnimalItem";
import { cn } from "@/lib/utils";
import { Animal } from "../types/animal";
import { sortByField } from "../../sort/utils/sortMethods";
interface SearchResultsProps {
  searchValue: string;
  className?: string;
  sortValue?:string;
  direction?: 'ltr' | 'rtl';
  render?:(animal:Animal) => React.ReactNode
}


export default function SearchResults({ searchValue, className, direction = 'ltr', sortValue='name-asc',render}: SearchResultsProps) {
  const { isLoading, data } = useSearch(searchValue === '' ? 'a' : searchValue)

  if (isLoading) return <Loader />
  if (!data) return <p>No results</p>

  const sortedData = sortByField(data, sortValue)
  
  return (
    <div className={cn("search-list", className, direction === 'ltr' ? '[direction:ltr]' : '[direction:rtl]')}>
      {isLoading? <Loader/> :(
      <div className="[direction:ltr]">
        {sortedData?.map(animal =>render? render(animal) : <AnimalItem animal={animal} key={animal.name} />)}
      </div>
      )}
    </div>
  );
}
