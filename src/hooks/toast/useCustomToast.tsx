import { useCallback } from "react";
import { useToast } from "./use-toast";
export type ToastVariantType = 'error' | 'notice' | 'success'
export function useCustomToast() {
    const { toast } = useToast()
    const customToast = useCallback(( message: string, title?:string, variant?:ToastVariantType) => {
        toast({
            description: (
                <div className="">
                    <h5 className="text-xl mb-2 capitalize">{title || variant}</h5>
                    <p className="text-lg">{message || 'Something went wrong'}</p>
                </div>
            ),
            variant,
        });
    },[toast])

    const errorToast = useCallback((message: string, title?:string) =>{
        customToast(message, title,'error')
    },[customToast])

    const infoToast = useCallback((message: string, title?:string) =>{
        customToast(message, title,'notice')
    },[customToast])

    const successToast = useCallback((message: string, title?:string) =>{
        customToast(message, title,'success')
    },[customToast])

    return { errorToast, infoToast,successToast }
}

