import axios from "axios";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { addTodoError, addTodoLoading, addTodoSuccess, getTodoSuccess } from "../redux/actions";
import { ADD_TODO_ERROR } from "../redux/actionType";

export const Home = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleTodo = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value
    });
  };

  const handlePost = async () => {
    // console.log(text);
    // dispatch(addTodoLoading());

    let res = await axios.post("http://localhost:3001/todos", {
      title: text.todo,
      authorName: text.authorName,
      status: false
    });

console.log(text);
console.log(res.data);
    dispatch(addTodoSuccess(res.data))
   
  };

  return (
    <div>
      <h1>Todo Home Page</h1>
      <input
        type="text"
        name="todo"
        placeholder="Add todo..."
        onChange={handleTodo}
      />
      <input
        type="text"
        name="authorName"
        placeholder="Add your Name ..."
        onChange={handleTodo}
      />
      <button onClick={handlePost}>Add</button>
      <div>
        <Link to={"/todolist"}>
          <h2>View todo list</h2>
        </Link>
      </div>
    </div>
  );
};
