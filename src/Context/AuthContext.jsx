import { createContext,  useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext =createContext();

export const AuthProvider =({children})=>{
   const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);

    const login = ()=>{
      setIsAuth(true);
      navigate("/")
    }
    const logOut = ()=>{
       setIsAuth(false) 
       navigate("/login")
    }
    
return <AuthContext.Provider value={{isAuth,login,logOut}}>{children}</AuthContext.Provider>

}