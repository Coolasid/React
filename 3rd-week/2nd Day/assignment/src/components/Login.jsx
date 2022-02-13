import { useContext, useState } from "react";
import { AuthContex } from "../context/AuthContext";

export const Login = () => {
  const { handleLogin } = useContext(AuthContex);

  const [username, setUsername] = useState("");

  const onSubmit = (e) =>{
    e.preventDefault();
    handleLogin(username);
  }


  return(
      <form onSubmit = {onSubmit}>
          <input type="text" onChange = {(e) => {
             setUsername(e.target.value)
         }}  name="username" placeeholder="username" />;

         <input type="submit" name="" id="" />
      </form>

  )
    
};
