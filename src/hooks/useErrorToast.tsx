import { useToast } from "./use-toast";

export function useErrorToast(){
    const {toast} = useToast()
    const errorToast = (message?:string) =>{
        toast({
            description:(
                <div className="">
                    <h5 className="text-xl mb-2">Error</h5>
                    <p className="text-lg">{message || 'Something went wrong'}</p>
                </div>
            ) ,
            variant: 'error',
          });
    }
    return {errorToast}
}