import { useState } from "react";
import { useSelector } from "react-redux";

export const TodoList = () => {

    const todos = useSelector((state)=> state.todos);
    //useSelector
    console.log(todos);
 
  return (
    <div>
        {"List of items" }
        {todos.map((item)=>{
          return  <div key={item.id}>
                {item.title}
            </div>
        })}
    </div>
  );
};
