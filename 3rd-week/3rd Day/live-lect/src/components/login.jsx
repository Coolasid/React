import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate();
    return <div>
        <input type="text" placeholder="email" name="" id="" />
        <input type="text" placeholder="password" />

        <button onClick={()=>{
            //impreative
            navigate(-1)

        }}>Signin</button>
    </div>
}