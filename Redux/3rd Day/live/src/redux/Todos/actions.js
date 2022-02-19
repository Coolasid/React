import {
  ADD_TODO,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  DEC_COUNT,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  INC_COUNT
} from "./Todos/actionTypes";



export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload
});

export const addTodoLoading = () => {
  return {
    type: ADD_TODO_LOADING
  };
};

export const addTodoSuccess = () => {
  return {
    type: ADD_TODO_SUCCESS
  };
};

export const getTodoLoading = () => {
  return {
    type: GET_TODO_LOADING
  };
};

export const getTodoSuccess = (payload) => {
  return {
    type: GET_TODO_SUCCESS,
    payload,
  };
};
