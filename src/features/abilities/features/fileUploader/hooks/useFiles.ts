import { useQuery } from "@tanstack/react-query";
import { loadFiles } from "../services/fileUpload";

export function useFiles(){
    const {data:files, isLoading} = useQuery({
        queryKey:['files'],
        queryFn:loadFiles
    })
    return {files, isLoading}
}