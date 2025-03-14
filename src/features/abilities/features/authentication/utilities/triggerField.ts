import { FormFieldType } from "../types/formTypes";

export function triggerField(
  e: React.ChangeEvent<HTMLInputElement>,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  trigger: (field: FormFieldType) => void,
  clearErrors: (field: FormFieldType) => void,
  field: FormFieldType,
) {
  onChange(e);

  if (e.target.value.trim() !== "") {
    trigger(field);
  } else {
    clearErrors(field);
  }
}
