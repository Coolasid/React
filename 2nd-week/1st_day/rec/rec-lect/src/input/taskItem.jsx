import React from "react";

function TaskItem({title, status, color}){

    return (
        <div>

            <div style={{color}} >{title}</div>

        </div>
    )

}

export {TaskItem}