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
import { useInfoToast } from "@/hooks/toast/useInfoToast"
import { useErrorToast } from "@/hooks/toast/useErrorToast"
import { useSuccessToast } from "@/hooks/toast/useSuccessToasts"

export function AuthForm({ type }: AuthFormProps) {

  const [defaultValues, validationSchema] = getFormInitialInstances(type)
  const form = useForm<z.infer<typeof validationSchema>>({
    resolver: zodResolver(validationSchema),
    defaultValues: defaultValues,
    mode: 'onSubmit',
  })
  const isSubmitting = form.formState.isSubmitting

  const { progressPercentage, updateValidCount, resetValidCount } = useValidInputsCount(defaultValues, form.watch(), form.formState.errors, false)

  const {successToast} = useSuccessToast()
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
    successToast('Registered')
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
                <Input {...field}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    triggerField(e, field.onChange, form.trigger, form.clearErrors, 'fullname')
                  }
                  onBlur={onInputBlur(field.onBlur)}
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
                  onBlur={onInputBlur(field.onBlur)} />
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    triggerField(e, field.onChange, form.trigger, form.clearErrors, 'password')}
                  onBlur={onInputBlur(field.onBlur)} />
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
                <Input {...field}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    triggerField(e, field.onChange, form.trigger, form.clearErrors, 'confirmPassword')}
                  onBlur={onInputBlur(field.onBlur)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-5 mt-5">
          <Button type="submit" className="flex-1" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>

          <Button type="button" className="flex-1" disabled={isSubmitting} onClick={onClearForm}>
            Clear
          </Button>

        </div>
      </form>
      <Progress value={progressPercentage} />
    </Form>
  )
}