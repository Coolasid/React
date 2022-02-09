
import './App.css';
import { Button } from './components/button';
import { useState } from 'react';
import { Flex } from './components/flex';

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <div className="App">
      <Button theme={theme}>Click me</Button>
      <br />
      <Flex>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </Flex>
      <button onClick={()=>{
        setTheme(theme === "light" ? "dark" : "light")
        // console.log(theme);
      }} >Change Theme</button>
    </div>
  );
}

export default App;
