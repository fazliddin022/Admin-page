import { createContext, useState, type Dispatch, type FC, type ReactNode, type SetStateAction } from "react";

interface ContexType {
    token:boolean | {},
    setToken:Dispatch<SetStateAction<string>>
}

export const Context = createContext<ContexType>({} as ContexType)

export const GlobalContext:FC<{children:ReactNode}> = ({children}) => {
    const [token, setToken] = useState<string>(localStorage.getItem("token") || "")

    localStorage.setItem("token", token)
    return <Context.Provider value={{token, setToken}}>{children}</Context.Provider>
}