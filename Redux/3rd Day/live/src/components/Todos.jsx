import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addTodo, addTodoLoading, addTodoSuccess, getTodoLoading, getTodoSuccess } from "../redux/actions";

import axios from "axios";

export const Todos = () => {
  const { loading, data, error } = useSelector((store) => store.todos, shallowEqual);
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleChanges = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
      getTodos();
  }, []);

  const getTodos = () => {
      dispatch(getTodoLoading())
    axios.get("http://localhost:3001/todos").then((res) => {
        dispatch(getTodoSuccess(res.data))
    });
  };

  return loading ? (
    "Loading..."
  ) : (
    <div>
      <input type="text" placeholder="add todo" onChange={handleChanges} />
      <button
        onClick={() => {
          //   console.log(todo);
          //   dispatch(addTodo({ id: Date.now(), title: text, status: false }));

          // network req
          // dispatch(loading);

          dispatch(addTodoLoading());

          axios
            .post("http://localhost:3001/todos", {
              title: text,
              status: false
            })
            .then((data) => {
              dispatch(addTodoSuccess());
              getTodos();
            })
            .catch(() => {
              //dispatch(error)
            });
        }}
      >
        Add
      </button>

      <div>
        {data.map((e) => (
          <div key={e.id}> {e.title} </div>
        ))}
      </div>
    </div>
  );
};
