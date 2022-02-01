import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import {v4 as uuid} from "uuid";

function Grocery(){

    const [grocery, setGrocery] = useState([]);

    const GroceryData = (data)=>{
        // console.log(data);

        let obj = {
            title: data,
            id:uuid(),
            status: false
        }

        setGrocery([...grocery, obj])

    }    

    const markComplete = (id)=>{
        // console.log(id);
     let compList = grocery.filter((el)=>{
         if(el.id === id) {
             el.status = true
         }
         return el
     })

        setGrocery(compList);
    }

    const deleteGrocery = (id) => {
        // console.log(id);
        let newList = grocery.filter((el)=>{
            if(el.id !== id) return el
        })

        setGrocery(newList);
    }


    return(
        <div>
            <GroceryInput GroceryData = {GroceryData} ></GroceryInput>
            {grocery.map((el)=>{
                return (
                  

                            <GroceryList
                            deleteGrocery={deleteGrocery}
                            markComplete={markComplete}
                            key={el.id}
                            id={el.id}
                            title={el.title}
                            status={el.status}
                            ></GroceryList>
                     
                );
            })}
        </div>
    )

}

export {Grocery};