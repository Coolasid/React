
import { useContext } from 'react';
import './App.css';
import { ReducContex } from './context/ReduxContext';
import { incCount } from './store/actions';
import { store } from './store/Store';

function App() {


  const {count} = useContext(ReducContex);
  return (
    <div className="App">
      <h3>Counter: {count}</h3>
      <button
        onClick={() => {
          store.dispatch(incCount(1));
        }}
      >
        Add 1
      </button>
    </div>
  );
}

export default App;
