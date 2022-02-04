import { useState } from 'react';
import './App.css';
/*
const initState = {
  name: "",
  email: "",
  age: ""
}

function App() {
  
  const [data, setData] = useState(initState);


  // const handleClick = e => {
  //   console.log(e.target.textContent);
    
  // }

  
  const handleChange = e => {
    const {name, value} = e.target;
    setData({...data, [name]: value })
  }

  const {name, email, age} = data;
  return (
    <div className="App">
      <h1>Events. useREf, Forms and more</h1>
      // { <button onClick={handleClick}>Add</button> }

      <input
        type="text"
        value={email}
        name= "email"
        onChange={handleChange}
      />
      <input
        type="text"
        value={name}
        name= 'name'
        onChange={handleChange}
      />
      <input
        type="text"
        value={age}
        name="age"
        onChange={handleChange}
      />

      <button onClick={()=> console.log(data) }>Click</button>
    </div>
  );
}

*/



function App(){

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [show, setShow] = useState(false);


  const fetchData = () => {
    setIsLoading(true);
    setIsError(false)

    setTimeout(()=>{
      setIsLoading(false);
    }, 2000);

  }

  const fetchDataWithError = () => {
    setIsError(true);
    setIsLoading(false);

    setTimeout(() => {
      setIsError(false);
    }, 2000);
  };

  
    return isLoading ? (
      <div className='App'>
        <h1>...Loading</h1>
      </div>
    ) : isError ? (
      <div className='App'>
          <h1>Something went Wrong</h1>
      </div>
    ) : (
    <div className='App'>
        <h1>Hello Sid Patil</h1>
        <h2>start editing to see some magic happen!</h2>
        <button onClick={fetchData}>Fetch Data</button>
        <button onClick={fetchDataWithError}>Fetch Data with Error</button>
        <button onClick={()=> setShow((prev) => !prev )}>Toggle showing Date</button>
        <br />
        {
          show ? new Date().toLocaleString() : "date hidden"
        }
    </div>
  );
}

export default App;
