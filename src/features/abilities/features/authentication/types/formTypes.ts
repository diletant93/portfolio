import { z } from "zod";
import {
  loginValidationSchema,
  registerValidationSchema,
} from "../schema/AuthSchemas";

export type FormType = "registration" | "login";

export type FieldsObjectType =
  | z.infer<typeof registerValidationSchema>
  | z.infer<typeof loginValidationSchema>;

export type FormSchemaType =
  | typeof registerValidationSchema
  | typeof loginValidationSchema;

export type FormSchemaTypeIntersection = z.infer<typeof registerValidationSchema> &
  z.infer<typeof loginValidationSchema>;

export type FormFieldType = keyof FormSchemaTypeIntersection;

export type AuthFormProps = {
  type: FormType;
};
