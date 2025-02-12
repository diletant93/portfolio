import { useCustomToast } from "@/hooks/toast/useCustomToast";
import { useMutation } from "@tanstack/react-query";
import { SignUpUserType } from "../types/authTypes";
import { signUpUser } from "../services/authApi";

function useRegister() {
  const {successToast, errorToast} = useCustomToast()

  const { isPending:isRegistering, mutateAsync:register } = useMutation({
    mutationFn:({fullName,email,password}:SignUpUserType) => signUpUser({fullName,email,password}),
    onSuccess: (data) => {
       console.log('here is data',data)
       successToast('Registered')
    },
    onError:(error) => errorToast(error.message)
  });

  return { isRegistering, register };
}

export { useRegister };