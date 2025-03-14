import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AuthContextStateType, SessionUserType } from "../types/authTypes";
import { getCurrentUser } from "../services/authApi";
import { useCustomToast } from "@/hooks/toast/useCustomToast";
const INITIAL_STATE: AuthContextStateType = {
    isAuthenticated: false,
    isCheckingAuth:false,
    user: null,
    refreshAuth:async ()=> {}
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
            console.log('i am here')
            const user = await getCurrentUser()
            if (user) {
                console.log('i also went here , so we are logged in')
                setIsAuthenticated(true)
                setSessionUser(user)
            }
            else {
                console.log('we are not logged in , logging out')
                logout()
            }

        } catch (error : unknown) {
            if(error instanceof Error){
                errorToast(error.message)
            }
            errorToast('Smth went wrong in the AuthProvider')
        }finally{
            setIsCheckingAuth(false)
        }
    },[errorToast])
    useEffect(() => {
        getSessionUser()
    }, [getSessionUser])

    const value = {
        isAuthenticated,
        isCheckingAuth,
        user: sessionUser,
        refreshAuth:getSessionUser
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