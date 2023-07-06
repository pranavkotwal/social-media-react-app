import { createContext } from "react"
import { useProvideAuth } from "../hooks"

const initalState={
    user: null,
    login:() =>{},
    logout:() => {},
    loading:true
}

export const AuthContext= createContext(initalState)

export const AuthProvider = ({children})=>{
    const auth = useProvideAuth()
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}