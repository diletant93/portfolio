import { useAuthentication } from "../context/AuthContext";
import Logout from "./Logout";
export default function AuthComponentWrapper({children}:{children:React.ReactNode}) {
  console.log('created')
    const {isAuthenticated, isCheckingAuth} = useAuthentication()
    if(isCheckingAuth) return <div>Loading...</div>
    if(isAuthenticated) return <Logout/>
  return <>{children}</>
}

