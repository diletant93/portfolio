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
import { useState } from "react";
import { ITEMS_PER_PAGE, VISIBLE_PAGINATION_BUTTONS } from "../constants/paginationLimit";
import { getPaginationInfo, getPaginationNumbers } from "../utils/paginationFunctions";
export default function PaginationShowcase() {
    const { data, isLoading } = useSearch('cat', 100)
    const [currentPage, setCurrentPage] = useState<number>(1)

    if (isLoading || !data) return <Loader />

    const { startIndex, endIndex, totalPages } = getPaginationInfo(currentPage, data.length, ITEMS_PER_PAGE)
    const currentItems = data.slice(startIndex, endIndex) || []

    return (
        <div>
            <Card className="shadcn-card min-h-[15rem]">
                <CardHeader className="bg-primary text-secondary border-none">
                    <CardTitle>Animals List</CardTitle>
                </CardHeader>
                <CardContent className="bg-primary">
                    <div className="search-list mb-4 text-secondary">
                        {currentItems?.map(animal => <AnimalItem animal={animal} key={animal.name} />)}
                    </div>
                    <ListPagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        itemsLength={data.length}
                        pageNumbers={getPaginationNumbers(currentPage, totalPages, VISIBLE_PAGINATION_BUTTONS)}
                        elementsPerPage={ITEMS_PER_PAGE} />
                </CardContent>
            </Card>
        </div>
    );
}
