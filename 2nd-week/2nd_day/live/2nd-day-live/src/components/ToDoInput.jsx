import { useState } from "react"

export const ToDoInput = () => {
    const [text, setText] = useState(" ")

    return (
        <div>

            <input type="text" onChange={(e) => {
                setText(e.target.value);
            }} />
            <button>Add ToDo</button>

        </div>

    )
}