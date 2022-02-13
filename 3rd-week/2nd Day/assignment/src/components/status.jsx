import { useContext } from "react/cjs/react.production.min"
import { AuthContex } from "../context/AuthContext"


export const Status = () =>{

    const {isAuth, token} = useContext(AuthContex);

    return <div>

        <h1> {isAuth ? `token is ${token}`: `User is not yet login`}</h1>

    </div>
}