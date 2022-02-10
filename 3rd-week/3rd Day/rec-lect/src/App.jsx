import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"/about"} element={<About></About>}></Route>
        <Route path={"/product/:id"} element={<Products></Products>}></Route>
      </Routes>
    </div>
  );
}

export default App;
