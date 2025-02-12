import {useCustomToast } from "./useCustomToast";

export function useErrorToast() {
    const {customToast} = useCustomToast();
    const errorToast = (message: string, title?:string) =>{
        customToast(message, title,'error')
    }
    return { errorToast }
}