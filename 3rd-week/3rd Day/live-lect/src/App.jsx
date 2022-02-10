import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Login } from './components/login';
import { Navbar } from './components/Navbar';
import { UserDetails } from './components/UserDetails';
import { Users } from './components/Users';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element= {<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/users' element= {<Users/>}></Route>
        <Route path='/users/:userId' element={<UserDetails></UserDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;
