import { useEffect, useState } from "react";
import "./App.css";
// const axios = require("axios");
import axios from "axios";
import { Todos } from "./components/ToDos";


function App() {

  //////////////////////
  // const [data, setData] = useState([]);

  // console.log(1);

  // useEffect(() => {
  //   // console.log(2);

  //   axios
  //     .get("http://localhost:3001/users")
  //     .then((res) => {
  //       // console.log(res.data);
  //       setData(res.data)
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });

  // },[]);


  // console.log(3);
  // return (
  //   <div className="App">
      
  //       {data.map((el) => {
  //         return <li>{el.first_name}</li>
  //       })}
      
  //   </div>
  // );
  ///////////////

  return(
    <div className="App">
        <Todos></Todos>
    </div>
  )

}






export default App;
