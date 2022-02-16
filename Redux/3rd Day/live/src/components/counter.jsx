import { useDispatch, useSelector } from "react-redux"
import { incCount } from "../redux/actions";

export const Counter = () =>{

    const data = useSelector((store) => store.count);

    const dispatch = useDispatch();

    return <div>
        Count: {data}
    <br />
        <button onClick={()=>{
            dispatch(incCount(1));
        }}> Add 1</button>
    </div>
}