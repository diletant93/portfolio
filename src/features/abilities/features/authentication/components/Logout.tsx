import { Button } from "@/components/ui/button";
import { useLogout } from "../hooks/useLogout";

export default function Logout() {
    const {logout, isLoggingOut}=useLogout()    
    if(isLoggingOut) return <div>Logging out...</div>
  return (
    <Button onClick={async ()=>{await logout()}}>
        Logout
    </Button>
  );
}
