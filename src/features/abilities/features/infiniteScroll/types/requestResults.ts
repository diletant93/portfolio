import { Animal } from "../../filter/types/animal";

export type FetchAnimalsResult = {
    data: Animal[];
    currentPage:number;
    nextPage:number | null;
}