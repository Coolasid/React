import React from "react";

const Child = ({value}) => <h3>Count is: {value}</h3>

function ParentToChild(){

    const [count, setcount] = React.useState(0);

    return (

        <div>
            <h1>Parent to Child</h1>
            <Child value={count}></Child>
            <button>+</button>
            <button>-</button>
        </div>
        
    )

}

export {ParentToChild}