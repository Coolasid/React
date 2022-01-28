import logo from './logo.svg';
import './App.css';

function App() {

  const oS = ["Android", "BlackBerry", "iPhone", "Windows Phone"]
  const mM = ["Samsung", "HTC", "Micromax", "Apple"]
  return (

    <div  id='heading'>

      
      <div id='hText'>
        Mobile Operating System
      </div>
      <div>
         {oS.map((e)=>{
            return <ul>

                  <li>{e}</li>

                  </ul>
        })}
    
      </div>

      <div id='hText'>
          Mobile Manufacturers
      </div>

      <div>
         {mM.map((e)=>{
            return <ul>

                  <li>{e}</li>

                  </ul>
        })}
    
      </div>
    

   
   </div>
  )
}

export default App;
