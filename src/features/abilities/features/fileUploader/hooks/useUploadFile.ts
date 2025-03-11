import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadFile as uploadFileApi } from "../services/fileUpload";
import { useCustomToast } from "@/hooks/toast/useCustomToast";

export function useUploadFile(){
    const queryClient = useQueryClient()
    const {errorToast, successToast} = useCustomToast()
    const {isPending, mutateAsync:uploadFile} = useMutation({
        mutationFn:(file:File) => uploadFileApi(file),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['files']})
            successToast('File was uploaded')
        },
        onError:(error) => errorToast(error.message)
    })
    return {isPending, uploadFile}
}