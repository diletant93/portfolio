import { useCustomToast } from "./useCustomToast";

export function useSuccessToast() {
    const {customToast} = useCustomToast();
    const successToast = (message: string, title?:string) =>{
        customToast(message, title,'success')
    }
    return { successToast }
}