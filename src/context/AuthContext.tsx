import React,{ createContext, useReducer } from "react"
import { authReducer } from "./authReducer"

// Definir como luce o que informacion tendre aqui 
export interface AuthState{
    isLoggedIn: boolean,
    username?: string,
    favoriteIcon?: string,
} 

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

// Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState,
    signIn: () => void,
    logOut: () => void,
    changeFavoriteIcon: (iconName: string) => void,
    changeUsername: (username: string) => void
}

// Crear  el contexto
export const AuthContext = createContext({} as AuthContextProps)

// Componente proovedor del estado
export const AuthProvider = ({ children }: any ) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: "signIn" })
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: "changeFavIcon", payload: iconName })
    }

    const logOut = () => {
        dispatch({ type: "logOut"})
    }

    const changeUsername = (username: string) => {
        dispatch({ type: "changeUsername", payload: username })
    }


    return (
        <AuthContext.Provider  value={{
            authState,
            signIn,
            logOut,
            changeFavoriteIcon,
            changeUsername
        }}>
            { children }
        </AuthContext.Provider>
    );
}