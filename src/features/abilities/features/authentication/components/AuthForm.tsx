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
import { AuthFormProps } from "../types/formTypes"
import React from "react"
import { Progress } from "@/components/ui/progress"
import { useValidInputsCount } from "../hooks/useValidInputsCount"
import { getFormInitialInstances } from "../utilities/getFormInitialInstances"
import { triggerField } from "../utilities/triggerField"
import { useRegister } from "../hooks/useRegister"
import { useLogin } from "../hooks/useLogin"
import { useAuthentication } from "../context/AuthContext"

export function AuthForm({ type }: AuthFormProps) {
  const [defaultValues, validationSchema] = getFormInitialInstances(type)
  const {refreshAuth} = useAuthentication()
  const form = useForm<z.infer<typeof validationSchema>>({
    resolver: zodResolver(validationSchema),
    defaultValues: defaultValues,
    mode: 'onSubmit',
  })
  const {isAuthenticated, isCheckingAuth} = useAuthentication()
  const isSubmitting = form.formState.isSubmitting

  const { isRegistering, register } = useRegister()
  const { isLoggingIn, login } = useLogin()

  const isLoading = isSubmitting || isRegistering || isLoggingIn
  const { progressPercentage, updateValidCount, resetValidCount } = useValidInputsCount(defaultValues, form.watch(), form.formState.errors, false)

  function onInputBlur(onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      onBlur(e)
      updateValidCount()
    }
  }

  function onClearForm() {
    form.reset()
    resetValidCount()
  }

  async function onSubmit(values: z.infer<typeof validationSchema>) {
    if ('fullName' in values && typeof values['fullName'] === 'string') {
      await register({ fullName: values.fullName, email: values.email, password: values.password })
    }
    if (!('fullName' in values)) {
      await login({ email: values.email, password: values.password })
    }
    refreshAuth()
  }
  if(isCheckingAuth) return <div>Checking...</div>  
  if(isAuthenticated) return <div>Already logged in</div>
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="shadcn-auth-form">
        {type === 'registration' && <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fullname</FormLabel>
              <FormControl>
                <Input {...field}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    triggerField(e, field.onChange, form.trigger, form.clearErrors, 'fullName')
                  }
                  onBlur={onInputBlur(field.onBlur)}
                  className="shadcn-input"
                  autoComplete="name"
                />
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
                <Input {...field}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    triggerField(e, field.onChange, form.trigger, form.clearErrors, 'email')
                  }
                  onBlur={onInputBlur(field.onBlur)} 
                  className="shadcn-input"
                  autoComplete="email"
                  />
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
                <Input {...field}
                  type="password"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    triggerField(e, field.onChange, form.trigger, form.clearErrors, 'password')}
                  onBlur={onInputBlur(field.onBlur)} 
                    className="shadcn-input"
                    autoComplete={type === 'registration'? 'new-password' :'current-password'}
                  />
              </FormControl>
              <FormMessage className="shadcn-form-message" />
            </FormItem>
          )}
        />
        {type === 'registration' && (
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input {...field}
                    type="password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      triggerField(e, field.onChange, form.trigger, form.clearErrors, 'confirmPassword')}
                    onBlur={onInputBlur(field.onBlur)} 
                      className="shadcn-input"
                      autoComplete="new-password"
                    />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <div className="w-full flex flex-col gap-5 mt-5">
          <Button type="submit" className="flex-1 shadcn-button" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>

          <Button type="button" className="flex-1 shadcn-button" disabled={isLoading} onClick={onClearForm}>
            Clear
          </Button>

        </div>
      </form>
      <Progress value={progressPercentage} />
    </Form>
  )
}