import logo from './logo.svg';
import './App.css';
import { TodoInput } from './components/Todoinput';
import { TodoList } from './components/TodoList';


function App() {
  return (
    <div className="App">
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
