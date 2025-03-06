import { useMemo, useState } from "react";
import { getPaginationInfo } from "../utils/paginationFunctions";

export default function usePagination<T>(items:T[] | undefined,itemsPerPage:number, buttonsQuantity:number) {
  const [currentPage, setCurrentPage] = useState<number>(1)
  
  if(!items) items = []

  const paginationData =useMemo(()=>{

    const { startIndex, endIndex, totalPages } = getPaginationInfo(currentPage, items.length, itemsPerPage)
    const currentItems = items.slice(startIndex, endIndex) || []

    function getPaginationNumbers() {
      const pageNumbers: (number | "ellipsis")[] = [];
      pageNumbers.push(1);
      if (totalPages <= buttonsQuantity) {
        for (let i = 2; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        if (currentPage <= 3) {
          pageNumbers.push(2, 3, "ellipsis", totalPages);
        } else if (currentPage >= totalPages - 2) {
          pageNumbers.push("ellipsis", totalPages - 2, totalPages - 1, totalPages);
        } else {
          pageNumbers.push(
            "ellipsis",
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "ellipsis",
          );
        }
      }
      return pageNumbers;
    }

    return {
      currentPage,
      setCurrentPage,
      startIndex,
      endIndex,
      totalPages,
      currentItems,
      getPaginationNumbers
    }
  },[items,itemsPerPage,buttonsQuantity,currentPage])
  return paginationData
}
