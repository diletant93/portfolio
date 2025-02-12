import { useCustomToast } from "@/hooks/toast/useCustomToast";
import { useMutation } from "@tanstack/react-query";
import { checkUserExists } from "../services/authApi";

function useRegister() {
  const {successToast, errorToast} = useCustomToast()

  const { isPending:isRegistering, mutateAsync:register } = useMutation({
    mutationFn:(email:string) => checkUserExists(email),
    onSuccess: (data) => {
        if(data === true){
            errorToast('User exists')
        }else{
            successToast('User does not exist')
        }
    },
  });

  return { isRegistering, register };
}

export { useRegister };