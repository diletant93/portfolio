import { useAuthentication } from "../context/AuthContext";
export default function AuthComponentWrapper({children}:{children:React.ReactNode}) {
    const {isAuthenticated, isCheckingAuth}=useAuthentication()
    if(isCheckingAuth) return <div>Loading...</div>
    if(isAuthenticated) return <div>Authenticated</div>
  return <>{children}</>
}

