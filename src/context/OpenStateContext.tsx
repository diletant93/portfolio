import { SetStateAction, createContext, useContext, useState } from "react"
type OpenStateContextType = {
    isOpen:boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
}
const INITIAL_STATE = {
    isOpen:false,
    setIsOpen:() => {}
}
const OpenStateContext = createContext<OpenStateContextType>(INITIAL_STATE)

export function OpenStateProvider({children}:{children:React.ReactNode}){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return(
        <OpenStateContext.Provider value={{
            isOpen,
            setIsOpen
        }}>
            {children}
        </OpenStateContext.Provider>
    )
}

export function useOpenState(){
    const context = useContext(OpenStateContext)
    if (!context) {
        throw new Error("useOpenState must be used within an OpenStateProvider");
      }
    return context
}