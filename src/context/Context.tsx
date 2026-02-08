import { createContext, useState, type Dispatch, type FC, type ReactNode, type SetStateAction } from "react";
import type { UserType } from "../@types/UserType";

interface ContexType {
    token:boolean | UserType,
    setToken:Dispatch<SetStateAction<boolean | UserType>>
    users:UserType[],
    setUsers:Dispatch<SetStateAction<UserType[]>>
}

export const Context = createContext<ContexType>({} as ContexType)

export const GlobalContext:FC<{children:ReactNode}> = ({children}) => {
    const [users, setUsers] = useState([
        {id:1, firstName:"Fazliddin", lastName: "Xakimjonov", email:"xakimjonovfazliddin@gmail.com", password:"1234"},
        {id:2, firstName:"User", lastName: "UserLast", email:"user@gmail.com", password:"2210"}
    ])
    const [token, setToken] = useState<boolean | UserType>(false)

    return <Context.Provider value={{token, setToken, users, setUsers}}>{children}</Context.Provider>
}