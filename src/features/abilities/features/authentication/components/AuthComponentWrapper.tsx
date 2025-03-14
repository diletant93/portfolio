import { useEffect } from "react";
import { useAuthentication } from "../context/AuthContext";
import Logout from "./Logout";
export default function AuthComponentWrapper({children}:{children:React.ReactNode}) {
    const {isAuthenticated, isCheckingAuth, refreshAuth} = useAuthentication()
    useEffect(()=>{
      console.log('working context')
      refreshAuth()
    },[refreshAuth])
    if(isCheckingAuth) return <div>Loading...</div>
    if(isAuthenticated) return <Logout/>
  return <>{children}</>
}

