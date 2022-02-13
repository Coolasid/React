import { useContext } from "react/cjs/react.production.min"
import { AuthContex } from "../context/AuthContext"


export const Navbar = () =>{

    const { isTog, handleToggleAuth} = useContext(AuthContex);


    return <div>

        <button onClick={handleToggleAuth}>
            {isTog ? "Sign-Out" : "Sign-In"}
        </button>
        <h1>Login</h1>
    </div>
}