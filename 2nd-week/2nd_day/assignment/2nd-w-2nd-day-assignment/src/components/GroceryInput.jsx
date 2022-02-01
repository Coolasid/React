import { useState } from "react"


export const GroceryInput = ({GroceryData}) => {

    const [text, setText] = useState("");

    return (
        <div>
            <input type="text" onChange={(e) =>{
                setText(e.target.value)
                // console.log(e.target.value);
            }} />
            <button onClick={()=>{
                GroceryData(text);
            }}> Add to List</button>
        </div>
    )
}