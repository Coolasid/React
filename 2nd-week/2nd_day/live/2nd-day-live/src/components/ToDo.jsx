
import React, { useState } from "react";
import { ToDoInput } from "./ToDoInput";
import { ToDosItems } from "./ToDoItems";

function ToDo(){
    const [todos, setTodos] = useState([]);
    return (
        <div>
            <ToDoInput></ToDoInput>
            {todos.map((e) => {
                return <ToDosItems></ToDosItems>
            })}
        </div>
    )

}

export {ToDo};