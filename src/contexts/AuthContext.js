import React, {useContext,useState,useEffect,createContext} from "react";
import { useAuth0 } from '@auth0/auth0-react'


const AuthContext = createContext()
export  function AuthProvider({children}) {
    const {
      isAuthenticated,
        user,
        loginWithRedirect,
        logout,
      } = useAuth0()


     
    
    const [myUser, setMyUser] = useState(null)
    useEffect(() => {
      setMyUser(user)
    }, [user]) 

    
    return (
       < AuthContext.Provider 
       value = {{
        loginWithRedirect, logout,myUser,
        isAuthenticated

       }}>
           {children}
       </AuthContext.Provider>
    )


}

export const AuthContexts =() => {
  return useContext(AuthContext)
}

