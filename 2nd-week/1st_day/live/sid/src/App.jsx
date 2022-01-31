
import './App.css';
import { Counter } from './components/counter';
import { UserDetails } from './components/userDetails';

function App() {
  return (
    <div className="App">
        {/* <UserDetails name= "john" add="pune" age={10} isMarried={false} /> 
        {/* //React.createElement("userDetails", {}, null) */}
        {/* <UserDetails name="sid" add= "burhanpur" isMarried={true} /> */}

        <Counter></Counter>

        
    </div>
  );
}

export default App;
