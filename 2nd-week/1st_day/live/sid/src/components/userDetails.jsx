
import "./userDetails.css";

//Props -> properties 
export function UserDetails({name, add, age, isMarried}){

    return <div>
        <h1 className="userName">Username: {name} </h1> 
         {/* //react.create("h1", {}) */}
        <p>Address: {add}</p>
        <p>age: {age}</p>
        <p>Married: {isMarried ? "yes" : "no"}</p>
    </div>

}