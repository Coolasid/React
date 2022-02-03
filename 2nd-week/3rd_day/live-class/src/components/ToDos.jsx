import { useEffect, useState } from "react";

import axios from "axios";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);

  
    useEffect(() => {
      getData();
    }, [page]);
    const getData = () => {
        axios
        .get(`http://localhost:3001/todos?_page=${page}&_limit=3`)
        .then((res) => {
            //   console.log(res.data);
            setTodos(res.data);
            
        })
        .catch((e) => {
          console.log(e);
        });
    }



  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      {/* onClick on button our data is been store in todosDB with the help of axios.post  */}

      <button
        onClick={() => {
          //fetch POST

          axios
            .post("http://localhost:3001/todos", {
              status: false,
              title: text
            })
            .then(getData);

          // getData();
          //   setTodos([...todos, { status: false, title: text }]);
        }}
      >
        Add todo
      </button>

      {todos.map((el) => {
        return (
          <div>
            {el.title} - {el.status ? "Done" : "Not Done"}
          </div>
        );
      })}

      <div>
        <button
          disabled={page == 1}
          onClick={() => {
            setPage(page - 1);
            if (page < 1) {
              setPage(1);
            }
          }}
        >
          prev
        </button>
        <button
          disabled={page == 3}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};
