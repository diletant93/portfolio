import { Button } from "@/components/ui/button";
import { useLogout } from "../hooks/useLogout";
import { useAuthentication } from "../context/AuthContext";

export default function Logout() {
  const { logout, isLoggingOut } = useLogout()
  const { refreshAuth } = useAuthentication()
  async function handleLogout() {
    await logout()
    await refreshAuth()
  }
  if (isLoggingOut) return <div>Logging out...</div>
  return (
    <Button onClick={handleLogout}>
      Logout
    </Button>
  );
}
