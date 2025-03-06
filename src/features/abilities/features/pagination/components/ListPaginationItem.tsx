import { PaginationEllipsis, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

type ListPaginationItemProps ={
    page:number | 'ellipsis';
    currentPage:number;
    goToPage:(page:number) => void;
}
export default function ListPaginationItem({page,currentPage, goToPage}:ListPaginationItemProps) {
    return page === 'ellipsis' ? (
        <PaginationItem>
            <PaginationEllipsis className="shadcn-pagination-ellipsis"/>
        </PaginationItem>
    ):(
        <PaginationItem>
            <PaginationLink
            onClick={() => goToPage(page)}
             className={cn("shadcn-pagination-button cursor-pointer",page===currentPage && 'shadcn-pagination-button-active')}
            >{page}</PaginationLink>
        </PaginationItem>
    )
}
