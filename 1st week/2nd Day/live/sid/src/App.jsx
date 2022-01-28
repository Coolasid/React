import logo from './logo.svg';
import './App.css';

function App() {
  const age = 21;
  const users = [
    {name:"sid", age: 21},
    {name:"patil", age:22}
  ]
  return (
    <div className="App">

      {/* <h1>my age is {age} after 2 year {age+2}</h1> */}


      {/* {[1, 2, 3, 4].map(e=>{
        return <h1>Hello World {e}</h1>
      })} */}


      {/* {[{name: "sid", age: 21}, {name: "patil", age:22}].map((e)=>{

        return <div>

                  <h1>hello: {e.name}</h1>
                  <p>your age is: {e.age} </p>

              </div>

      })} */}


      {/* {users.map((e) =>{
        return Userdata(e)
        
      })} */}

      {users.map((e) =>{
        return <Userdata name={e.name} age={e.age}/>
        
      })}

    </div>
  );
}

//component=>
// function Userdata(e){

//   return (<div>
//             <h1>Hello: {e.name}</h1>
//             <p>your age is: {e.age}</p>
//           </div>)

// }

function Userdata(props){
  return (<div>
          <h1>Hello: {props.name}, welcome</h1>
             <p>your age is: {props.age}</p>
          </div>)
}

export default App;
