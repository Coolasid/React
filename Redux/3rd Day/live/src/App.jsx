import { Counter } from "./components/counter";
import { Todos } from "./components/Todos";
import "./App.css"

function App() {
  return (
    <div className="App">
     <Counter></Counter>
     <hr />
     <Todos></Todos>
    </div>
  );
}

export default App;


// actionTypes
// actions
// reducer
// store

// useSelector -> get Data
// useDispatch -> dispatch an action