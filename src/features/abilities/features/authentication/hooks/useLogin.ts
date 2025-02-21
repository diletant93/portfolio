import { useMutation } from "@tanstack/react-query";
import { SignInUserType } from "../types/authTypes";
import { signInUser } from "../services/authApi";
import { useCustomToast } from "@/hooks/toast/useCustomToast";

function useLogin() {
  const {errorToast,successToast} = useCustomToast()
  const { isPending:isLoggingIn, mutateAsync:login } = useMutation({
    mutationFn:({email,password}:SignInUserType)=> signInUser({email,password}),
    onSuccess: (data) => {
      successToast('Logged in')  
    },
    onError: (err) =>{errorToast(err.message)} 
  });

  return { isLoggingIn, login };
}

export { useLogin };