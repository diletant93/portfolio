import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { cn } from "@/lib/utils";
import { SetStateAction } from "react";
import ListPaginationItem from "./ListPaginationItem";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MEDIA_QUERIES } from "@/constants/mediaQueries";
type ListPaginationProps = {
    currentPage: number;
    setCurrentPage: React.Dispatch<SetStateAction<number>>
    pageNumbers: (number | 'ellipsis')[];
    totalPages: number;
}
export default function ListPagination({ currentPage, setCurrentPage, totalPages, pageNumbers, }: ListPaginationProps) {
    const matches = useMediaQuery(MEDIA_QUERIES.MD)
    if (totalPages <= 1) return null;
    return (
        <Pagination>
            <PaginationContent className="flex-center gap-2 w-2/3 md:w-full">
                <PaginationItem className="flex-1 md:flex-grow-0">
                    <PaginationPrevious
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        className={cn("shadcn-pagination-button", currentPage === 1 && 'pointer-events-none opacity-50')}
                    />
                </PaginationItem>
                {matches ?
                    pageNumbers.map((page, index) => <ListPaginationItem key={index} page={page} currentPage={currentPage} goToPage={setCurrentPage} />)
                    :
                    null
                }
                <PaginationItem className="flex-1 md:flex-grow-0">
                    <PaginationNext
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        className={cn("shadcn-pagination-button", currentPage === totalPages && 'pointer-events-none opacity-50')}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
