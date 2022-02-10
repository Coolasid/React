import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => setUsers(res.data.data));
  }, []);
//   console.log(users);
  return <div>
      {users.map((user, idx)=>{
          return (
            <p key={idx}>
              User: {user.id} - <Link to={`/users/${user.id}`}>{user.first_name}</Link>
            </p>
          );
      })}
  </div>;
};
