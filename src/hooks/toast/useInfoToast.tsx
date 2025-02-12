import { useCustomToast } from "./useCustomToast";

export function useInfoToast() {
    const {customToast} = useCustomToast();
    const infoToast = (message: string, title?:string) =>{
        customToast(message, title,'notice')
    }
    return { infoToast }
}