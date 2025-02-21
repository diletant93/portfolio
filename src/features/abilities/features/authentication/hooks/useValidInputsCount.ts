import { useCallback, useEffect, useState } from "react";
import { FieldErrors } from "react-hook-form";

export function useValidInputsCount<T extends Record<string, string>>(
  defaultValues: T,
  watchedValues: T,
  errors: FieldErrors<T>,
  isAutoUpdate: boolean = true,
) {
  console.log('Default values',defaultValues)

  const [validCount, setValidCount] = useState<number>(0);
  const totalFields = Object.keys(defaultValues).length;
  const watchedValuesKeys = Object.keys(watchedValues);
  const progressPercentage = (validCount / totalFields) * 100;

  const updateValidCount = useCallback(() => {
    const valid = watchedValuesKeys.reduce((count, field) => {
      const value = watchedValues[field];
      if (value && value.trim() !== "" && !errors[field]) {
        return count + 1;
      }
      return count;
    }, 0);
    setValidCount(valid);
  }, [watchedValues, watchedValuesKeys, errors]);
  const resetValidCount = () => setValidCount(0)
  useEffect(() => {
    if (isAutoUpdate) updateValidCount();
  }, [isAutoUpdate, updateValidCount]);
  return { validCount, updateValidCount, progressPercentage ,resetValidCount };
}
