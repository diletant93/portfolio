export function getPaginationNumbers(
  currentPage: number,
  totalPages: number,
  visibleButtons: number,
) {
  const pageNumbers: (number | "ellipsis")[] = [];
  pageNumbers.push(1);
  if (totalPages <= visibleButtons) {
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
export function getPaginationInfo(currentPage:number, length: number, limit: number) {
  const totalItems = length;
  const totalPages = Math.ceil(totalItems / limit);

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  return {startIndex, endIndex, totalPages}
}
