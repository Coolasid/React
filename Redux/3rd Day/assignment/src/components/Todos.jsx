import axios from "axios";
import "./Todos.css"
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addTodoError, addTodoSuccess, getTodoSuccess, getToggleTodo, toggleTodoSuccess } from "../redux/actions";

import { Link } from "react-router-dom";
import { ADD_TODO_ERROR } from "../redux/actionType";

export const Todos = () => {
  const {todos, loading, error}  = useSelector((store) => ({
    todos: store.todos,
    loading: store.loading,
    error: store.error,
  }));

  // console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
      getTodos();
  }, []);

  const getTodos = async() => {
   
    let res = await axios.get("http://localhost:3001/todos");

    // console.log(res.data);

    dispatch(getTodoSuccess(res.data))

  }
//   console.log(todos);

  const handleToggle = async (id) => {
    //   alert(id)
    // dispatch(toggleTodoSuccess(id))
    var data;
    todos.map((todo) => (todo.id === id ? (data = todo) : todo));
    
   let res =  await axios.patch(`http://localhost:3001/todos/${id}`,{
      status: true,
    })

    getTodos();
  }

  const handleDelete = async (id) =>{
      // alert(id)
       await axios.delete(`http://localhost:3001/todos/${id}`)
       getTodos();
  }

  console.log(todos);

  return loading ? (
      <h1>Loading...</h1>
  ) : error ? (
      <h1>something went wrong</h1>
  ) : (

   <div>
      <Link to="/" >
          <h1>Go To HomePage</h1>
      </Link>
      {
          todos.map((el )=>{
              return (
                <div className={el.status ? "green" : "red"} key={el.id}>
                  <h3>
                    Title: {el.title} & authName: {el.authorName}
                  </h3>
                  <button onClick={()=>{
                      handleDelete(el.id)
                  }}>Remove</button> <button onClick={()=>{
                      handleToggle(el.id)
                  }}>Toggle</button> <button>Edit</button>
                </div>
              );
          })
      }
  </div>
  )
};
