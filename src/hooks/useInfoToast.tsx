import { useToast } from "./use-toast";

export function useInfoToast(){
    const {toast} = useToast()
    const infoToast = (message:string) =>{
        toast({
            title:'Notice',
            description:<p>{message}</p>,
            variant:'notice',
            
        })
    }
    return {infoToast}
}