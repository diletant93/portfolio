import {
  loginValidationSchema,
  registerValidationSchema,
} from "../schema/AuthSchemas";
import { FieldsObjectType, FormSchemaType, FormType } from "../types/formTypes";

export function getFormInitialInstances(
  type: FormType,
): [FieldsObjectType, FormSchemaType] {
  switch (type) {
    case "registration":
      return [
        {
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
        registerValidationSchema,
      ];

    case "login":
      return [
        {
          email: "",
          password: "",
        },
        loginValidationSchema,
      ];
  }
}
