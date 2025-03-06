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
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react";
import { ITEMS_PER_PAGE, VISIBLE_PAGINATION_BUTTONS } from "../constants/paginationLimit";
import { cn } from "@/lib/utils";
export default function PaginationShowcase() {
    const { data, isLoading } = useSearch('cat',100)
    const [currentPage, setCurrentPage] = useState<number>(1)

    if (isLoading || !data) return <Loader />

    const totalItems = data.length
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = data.slice(startIndex, endIndex) || []

    function getPaginationNumbers() {
        const pageNumbers: (number | 'elipsis')[] = []
        pageNumbers.push(1)
        if (totalPages <= VISIBLE_PAGINATION_BUTTONS) {
            for (let i = 2; i <= totalPages; i++) {
                pageNumbers.push(i)
            }
        } else {
            if (currentPage <= 3) {
                pageNumbers.push(2, 3, 'elipsis', totalPages)
            }
            else if (currentPage >= totalPages - 2) {
                pageNumbers.push('elipsis', totalPages - 2, totalPages - 1, totalPages)
            }
            else {
                pageNumbers.push('elipsis', currentPage - 1, currentPage, currentPage + 1, 'elipsis')
            }

        }
        return pageNumbers
    }



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
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} 
                                    className={cn('shadcn-pagination-button',currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer')}/>
                            </PaginationItem>
                            {getPaginationNumbers().map(page => {
                                return page === 'elipsis' ? (
                                    <PaginationItem>
                                        <PaginationEllipsis className="shadcn-pagination-ellipsis"/>
                                    </PaginationItem>
                                ) :
                                    (
                                        <PaginationItem>
                                            <PaginationLink 
                                            onClick={() => setCurrentPage(page)} 
                                            isActive={page === currentPage}
                                            className={cn("shadcn-pagination-button cursor-pointer",page===currentPage && 'shadcn-pagination-button-active')}
                                            >{page}
                                            </PaginationLink>
                                
                                        </PaginationItem>
                                    )
                            })}

                            <PaginationItem>
                                <PaginationNext onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} 
                                    className={cn('shadcn-pagination-button',currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer')}/>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </CardContent>
            </Card>
        </div>
    );
}
