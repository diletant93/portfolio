import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AuthContextStateType, SessionUserType } from "../types/authTypes";
import { getCurrentUser } from "../services/authApi";
import { useCustomToast } from "@/hooks/toast/useCustomToast";
const INITIAL_STATE: AuthContextStateType = {
    isAuthenticated: false,
    isCheckingAuth:false,
    user: null,
}
const AuthContext = createContext(INITIAL_STATE);
function AuthProvider({ children }: { children: React.ReactNode }) {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(INITIAL_STATE.isAuthenticated);
    const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(INITIAL_STATE.isCheckingAuth);
    const [sessionUser, setSessionUser] = useState<SessionUserType>(INITIAL_STATE.user);

    const {errorToast} = useCustomToast()

    function logout() {
        setIsAuthenticated(false)
        setSessionUser(null)
    }

    const getSessionUser = useCallback( async function () {
        try {
            setIsCheckingAuth(true)
            const user = await getCurrentUser()
            console.log(user)
            if (user) {
                setIsAuthenticated(true)
                setSessionUser(user)
            }
            else logout()

        } catch (error : unknown) {
            if(error instanceof Error){
                errorToast(error.message)
            }
            errorToast('Smth went wrong in the AuthProvider')
        }finally{
            setIsCheckingAuth(false)
        }
    },[errorToast])
    console.log('context')
    useEffect(() => {
        console.log('works is auth')
        getSessionUser()
    }, [getSessionUser])

    const value = {
        isAuthenticated,
        isCheckingAuth,
        user: sessionUser,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuthentication() {
    const context = useContext(AuthContext);
    if (context === undefined) throw new Error('CitiesContext was used outside of CitiesProvider');
    return context;
}
export { AuthProvider, useAuthentication }