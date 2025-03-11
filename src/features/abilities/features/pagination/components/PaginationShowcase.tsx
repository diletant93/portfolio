import Loader from "@/components/Loader";
import AnimalItem from "../../filter/components/AnimalItem";
import { useSearch } from "../../filter/hooks/useSearch";
import ListPagination from "./ListPagination";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ITEMS_PER_PAGE, VISIBLE_PAGINATION_BUTTONS } from "../constants/paginationLimit";
import usePagination from "../hooks/usePagination";
import { Animal } from "../../filter/types/animal";
export default function PaginationShowcase() {
    const { data, isLoading } = useSearch('cat', 100)

    const { currentPage, setCurrentPage,
        totalPages, getPaginationNumbers,
        currentItems
    } = usePagination<Animal>(data, ITEMS_PER_PAGE, VISIBLE_PAGINATION_BUTTONS)

    if (isLoading || !data) return <Loader />

    return (
        <div>
            <Card className="shadcn-card">
                <CardHeader className="shadcn-card-header">
                    <CardTitle>Animals List</CardTitle>
                </CardHeader>
                <CardContent className="shadcn-card-content">
                    <div className="search-list mb-4 text-secondary h-[10rem]">
                        {currentItems?.map(animal => <AnimalItem animal={animal} key={animal.name} />)}
                    </div>
                    <ListPagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        pageNumbers={getPaginationNumbers()}
                        totalPages={totalPages} />
                </CardContent>
            </Card>
        </div>
    );
}
