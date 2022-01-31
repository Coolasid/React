import React from "react";
import { TaskItem } from "./taskItem";

function Task(){

    const [query, setQuery] = React.useState("")
    const [tasks, setTasks] = React.useState([]);

    const handleChange = (e) =>{
        console.log(e.target, e.target.value);
        const {value} = e.target;

        setQuery(value);
    }

    const handleAdd = () => {
        const payload = {
            title: query,
            status: false
        };
        let newTasks = [ ...tasks, payload]; 
        setTasks(newTasks);
    }
    console.log(tasks);

return (

    <div>
        <h1>Tasks</h1>
        <div>

            <input value={query} onChange={handleChange}  placeholder="add something..."/>
            <button onClick={handleAdd} >ADD</button>
        </div>

        <div>
            {
                tasks.map((item, idx)=>{
                    return <TaskItem color= {idx % 2 == 0 ? "blue" : "green"}  title= {item.title} status= {item.status}></TaskItem>
                })
            }
        </div>

    </div>

)


}


export {Task}