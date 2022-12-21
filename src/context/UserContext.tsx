
import React, { createContext, ReactChildren } from "react";
type Context = {
    name: string
    email: string
    interests: string[]
}

export const userContext = createContext<Context>({
    name: '',
    email: '',
    interests: []
})


export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <userContext.Provider value={{
            name: 'Maycon',
            email: 'mayconfelipe164@gmail.com',
            interests: ['action', 'comedy']
        }}>
            {children}
        </userContext.Provider>
    )
} 