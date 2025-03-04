import Loader from "@/components/Loader";
import { useSearch } from "../hooks/useSearch";
import AnimalItem from "./AnimalItem";

export default function SearchResults({searchValue}:{searchValue:string}) {
    const {isLoading, data} = useSearch(searchValue === '' ? 'a': searchValue)
    if(isLoading) return <Loader/>
    if(!data) return <p>No results</p>
  return (
    <div className="h-[20vh] overflow-y-auto custom-scrollbar p-1 pr-3">
      {data?.map(animal => <AnimalItem animal={animal} key={animal.name}/>)}
    </div>
  );
}
