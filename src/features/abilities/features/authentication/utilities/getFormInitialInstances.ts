import { loginValidationSchema, registerValidationSchema } from "../schema/AuthSchemas";
import { FieldsObjectType, FormSchemaType, FormType } from "../types/formTypes";

export function getFormInitialInstances(type: FormType):
  [FieldsObjectType,
    FormSchemaType] {

  let defaultValues:FieldsObjectType;
  let validationSchema: FormSchemaType;

  if (type === 'registration') {
    defaultValues = {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
    validationSchema = registerValidationSchema
  } else {
    defaultValues = {
      email: '',
      password: '',
      confirmPassword: '',
    }
    validationSchema = loginValidationSchema
  }

  return [defaultValues, validationSchema]
}