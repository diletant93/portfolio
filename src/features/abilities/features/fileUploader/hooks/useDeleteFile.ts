import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFile as deleteFileApi } from "../services/fileUpload";
import { useCustomToast } from "@/hooks/toast/useCustomToast";
export function useDeleteFile(){
    const {errorToast , successToast} = useCustomToast()
    const queryClient = useQueryClient()
    const{isPending:isDeleting, mutateAsync:deleteFile} = useMutation({
        mutationFn: (filePath:string) => deleteFileApi(filePath),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['files']})
            successToast('File was deleted')
        },
        onError:(error) => errorToast(error.message)
    })
    return {isDeleting, deleteFile}
}