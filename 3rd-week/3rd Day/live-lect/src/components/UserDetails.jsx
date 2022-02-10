import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

export const UserDetails = () => {
    const [userDetails, setUserDetails] = useState([]);
  const { userId } = useParams();
  useEffect(()=>{

      axios
        .get(`https://reqres.in/api/users/${userId}`)
        .then((res) => {
            setUserDetails([res.data.data]);
        })
    },[])
    
    // console.log(userDetails);

    const isAuth = true;

    if(!isAuth){
        return <Navigate to="/login"></Navigate>
    }

  return (
    <div>
        {userDetails.map((el, idx)=>{
            return <p key={idx}>
                {el.email} - {el.first_name} - {el.last_name}
                <br />
                <img src={el.avatar} alt="" />
            </p>
        })}
    </div>
  );
};
