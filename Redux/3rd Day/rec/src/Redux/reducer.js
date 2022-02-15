import { ADD_TODO } from "./actionType";

const initState = {
    todos: [
        {
            id:1,
            title: "Learn Redux",
            statue: false,
        }
    ]
}

export const reducer = (state = initState, {type,payload}) =>{
    switch(type){
        case ADD_TODO:
            return {
                ...state,
                todos: [ ...state.todos, payload]
            }
        default:
            return state;
    }
}
