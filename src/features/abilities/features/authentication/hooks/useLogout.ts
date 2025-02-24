import { useCustomToast } from "@/hooks/toast/useCustomToast";
import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "../services/authApi";

function useLogout() {
  const {successToast, errorToast} = useCustomToast()
  const { isPending:isLoggingOut, mutateAsync:logout } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
        successToast('Logged out')
    },
    onError: (err) => errorToast(err.message)
  });

  return { isLoggingOut, logout };
}

export { useLogout };