import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AuthContextStateType, SessionUserType } from "../types/authTypes";
import { getCurrentUser } from "../services/authApi";
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

    function logout() {
        setIsAuthenticated(false)
        setSessionUser(null)
    }

    const getSessionUser = useCallback( async function () {
        setIsCheckingAuth(true)
        const user = await getCurrentUser()
        console.log(user)
        if (user) {
            setIsAuthenticated(true)
            setSessionUser(user)
        }
        else logout()

        setIsCheckingAuth(false)
    },[])

    useEffect(() => {
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