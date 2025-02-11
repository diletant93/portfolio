import { useCallback, useEffect, useState } from "react";

export function useValidInputsCount<T extends Record<string,string>>(
    defaultValues: T,
    watchedValues: T,
    isAutoUpdate: boolean = true
){
    const [validCount, setValidCount] = useState<number>(0)
    const totalFields = Object.keys(defaultValues).length
    const watchedValuesKeys = Object.keys(watchedValues)
    const progressPercentage = (validCount / totalFields) * 100

    const updateValidCount = useCallback(()=>{
        const valid = watchedValuesKeys.reduce((count, field)=>{
            const value = watchedValues[field]
            if(value && value.trim() !== ''){
                return count + 1
            }
            return count
        },0)
        setValidCount(valid)
    },[watchedValues,watchedValuesKeys])

    useEffect(()=>{
        if(isAutoUpdate) updateValidCount()
    },[isAutoUpdate, updateValidCount])
    return {validCount, updateValidCount, progressPercentage}
}