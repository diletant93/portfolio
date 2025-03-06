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
type ListPaginationProps ={
    currentPage: number;
    setCurrentPage: React.Dispatch<SetStateAction<number>>
    pageNumbers:(number | 'ellipsis')[]; 
    totalPages:number;
}
export default function ListPagination({currentPage,setCurrentPage,totalPages, pageNumbers,}:ListPaginationProps) {
    if (totalPages <= 1) return null;
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious 
                    onClick={()=> setCurrentPage(Math.max(1,currentPage-1))} 
                    className={cn("shadcn-pagination-button", currentPage === 1 && 'pointer-events-none opacity-50')}
                    />
                </PaginationItem>
                {pageNumbers.map((page, index)=><ListPaginationItem key={index} page={page} currentPage={currentPage} goToPage={setCurrentPage}/>)}
                <PaginationItem>
                    <PaginationNext 
                     onClick={()=> setCurrentPage(Math.min(totalPages,currentPage+1))} 
                     className={cn("shadcn-pagination-button", currentPage === totalPages && 'pointer-events-none opacity-50')}
                     />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
