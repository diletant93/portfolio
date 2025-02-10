import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { AuthFormProps, FormFieldType, FormType } from "../types/formTypes"
import { loginValidationSchema, registerValidationSchema } from "../schema/AuthSchemas"
import React from "react"


function getFormInitialInstances(type: FormType):
  [z.infer<typeof registerValidationSchema> | z.infer<typeof loginValidationSchema>,
    typeof registerValidationSchema | typeof loginValidationSchema] {

  let defaultValues: z.infer<typeof registerValidationSchema> | z.infer<typeof loginValidationSchema>;
  let validationSchema: typeof registerValidationSchema | typeof loginValidationSchema;

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

function triggerField(
  e: React.ChangeEvent<HTMLInputElement>,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  trigger: (field: FormFieldType) => void,
  clearErrors: (field: FormFieldType) => void,
  field: FormFieldType) {

  onChange(e)

  if (e.target.value.trim() !== "") {
    trigger(field)
  } else {
    clearErrors(field)
  }
  
}

export function AuthForm({ type }: AuthFormProps) {

  const [defaultValues, validationSchema] = getFormInitialInstances(type)

  const form = useForm<z.infer<typeof validationSchema>>({
    resolver: zodResolver(validationSchema),
    defaultValues: defaultValues,
    mode: 'onSubmit',
    shouldUnregister: false,
  })

  function onSubmit(values: z.infer<typeof validationSchema>) {

    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="shadcn-auth-form">
        {type === 'registration' && <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fullname</FormLabel>
              <FormControl>
                <Input {...field} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  triggerField(e, field.onChange, form.trigger, form.clearErrors, 'fullname')
                } />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  triggerField(e, field.onChange, form.trigger, form.clearErrors, 'email')
                } />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  triggerField(e, field.onChange, form.trigger, form.clearErrors, 'password')} />
              </FormControl>
              <FormMessage className="shadcn-form-message" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input {...field} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  triggerField(e, field.onChange, form.trigger, form.clearErrors, 'confirmPassword')} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-5">Submit</Button>
      </form>
    </Form>
  )
}
