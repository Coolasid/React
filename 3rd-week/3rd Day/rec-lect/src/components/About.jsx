import { useNavigate } from "react-router-dom"

export const About = () => {

    const navigate = useNavigate();

    return <div>
        About us: <br />
        We are best <br />
        Thanks: <br />
        <button onClick={()=>{
            //server fetch()...

            navigate("/product/siddeshPatil")

        }}>Submit</button>
    </div>
}