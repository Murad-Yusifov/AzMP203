import { createContext, useContext, useState } from "react";

const UserContext = createContext()

export const UserProvider =({children}) =>{
    const [name, setName] = useState("Murad Yusifov")

    return (
        <UserContext.Provider value={{name, setName}} >
            {children}
        </UserContext.Provider>
    )
}

export const useAuth =()=>{
    return useContext(UserContext)
}