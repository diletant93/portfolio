import { useToast } from "./use-toast";
export type ToastVariantType = 'error' | 'notice' | 'success'
export function useCustomToast() {
    const { toast } = useToast()
    const customToast = ( message: string, title?:string, variant?:ToastVariantType) => {
        toast({
            description: (
                <div className="">
                    <h5 className="text-xl mb-2 capitalize">{title || variant}</h5>
                    <p className="text-lg">{message || 'Something went wrong'}</p>
                </div>
            ),
            variant,
        });
    }

    const errorToast = (message: string, title?:string) =>{
        customToast(message, title,'error')
    }

    const infoToast = (message: string, title?:string) =>{
        customToast(message, title,'notice')
    }

    const successToast = (message: string, title?:string) =>{
        customToast(message, title,'success')
    }

    return { errorToast, infoToast,successToast }
}

