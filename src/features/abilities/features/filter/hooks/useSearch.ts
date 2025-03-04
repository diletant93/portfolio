import { useQuery } from "@tanstack/react-query";
function useSearch() {
  const { isLoading, data } = useQuery({
    queryKey: ["key"],
    queryFn: () => {}
  });
  return { isLoading, data };
}

export { useSearch };