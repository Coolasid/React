
import { createStore } from "redux";
import { DEC_COUNT, INC_COUNT } from "./store/actionType.js";
import { decCount, incCount } from "./store/actions.js";

const reducer = (store, action) =>{
    switch(action.type){
        case INC_COUNT:
            return {...store, count: store.count + action.payload }
        case DEC_COUNT:
            return {...store, count: store.count - action.payload}
        case "ADD_TODO":
            return {...store, todo: [...store.todo, action.payload]}
        default:
            return store;
    }
};



//--------------------reducer init

const init = { count: 0, todo: [] };

const store = createStore(reducer, init);
console.log(store.getState());

store.dispatch(incCount(1))
console.log(store.getState());

store.dispatch(decCount(3));
console.log(store.getState());

// store.dispatch({
//     type: "ADD_TODO",
//     payload: { id: 1, state: false, }
// })

// console.log(store.getState());


//4
// actionTypes
// actions-> action creators
// reducer
// store