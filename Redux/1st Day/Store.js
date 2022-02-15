
import { createStore } from "redux";
import { decCount, incCount } from "./store/actions.js";
import { reducer } from "./store/reducer.js";



store.subscribe(()=>{
    console.log();
})


// VIEW:
const init = { count: 0, todo: [] };

const store = createStore(reducer, init);
console.log(store.getState());

store.dispatch(incCount(1))
console.log(store.getState());

store.dispatch(decCount(3));
console.log(store.getState());




//4
// actionTypes
// actions-> action creators
// reducer
// store