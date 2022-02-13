
import { createContext, useState } from "react/cjs/react.production.min";
import {nanoid} from "nanoid";


export const AuthContex = createContext();

export const AuthContextProvider = ({childern}) => {

    const [isAuth, setIsAuth] = useState(false);

    const [token, setToken] = useState(null);

    const [isTog, setIsTog] = useState(false);

    const handleToggleAuth = () =>{
        setIsTog(!isTog);
        setIsAuth(false)
    }

    const handleLogin = (username) =>{
        setIsAuth(true)
        setIsTog(nanoid(10) + "username is " + username)
    }




    return <AuthContex.Provider value={{isAuth, token, isTog, handleLogin, handleToggleAuth}}> {childern}</AuthContex.Provider>


}