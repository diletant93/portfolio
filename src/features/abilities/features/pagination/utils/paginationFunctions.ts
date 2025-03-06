export function getPaginationInfo(currentPage:number, length: number, limit: number) {
  const totalItems = length;
  const totalPages = Math.ceil(totalItems / limit);

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  return {startIndex, endIndex, totalPages}
}
