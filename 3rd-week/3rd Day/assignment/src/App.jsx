import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Products } from './components/product';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/:category' element={<Products></Products>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
