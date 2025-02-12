
import { useToast } from "./use-toast";

export function useInfoToast(){
    const {toast} = useToast()
    const infoToast = (message:string) =>{
        toast({
            description:(
                <div className="">
                    <h5 className="text-xl mb-2">Notice</h5>
                    <p className="text-lg">{message}</p>
                </div>
            ) ,
            variant: 'notice',
          });
    }
    return {infoToast}
}