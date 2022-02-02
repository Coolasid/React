import React from "react";

function Todo(){
    
    const [data, setData] = React.useState([]);

    const [isLoading, setLoading] = React.useState(false)
    
    const [isError, setIsError] = React.useState(false)

    React.use
    const getTodos = () => {

        React.useEffect(()=>{
            setLoading(true);
            fetch('https://json-server-mocker-masai.herokuapp.com/tasks')
            .then(res=>res.json())
            .then((res) =>{
                console.log(res);
                setData(res)
            }).catch(err=>{
                setIsError(true)
            }).finally(()=>{
                setLoading(false);
            });
        },[])
    }

    return isLoading ? (
        <div>...loading</div>
    ): isError ?(
        <div>something went wrong</div>
    ):(
        <div>
            <div>
                <input type="text" placeholder="add something" name="" id="" />
                <button>Add</button>
            </div>

            <div>
                {data.map(item=>{
                    <li key={item.id}>{item.title}-${item.status}</li>
                })}
            </div>
        </div>
    )
}

export {Todo};