import { sortOptions } from "../constants/sortOptions";
import AnimalsSortItem from "./AnimalsSortItem";
export default function AnimalsSortList() {
    return (
        <>
            {sortOptions.map(option => <AnimalsSortItem key={option} option={option} />)}
        </>
    );
}
