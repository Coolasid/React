
import { createStore } from "redux";
import { reducer } from "./reducer.js";





// VIEW:
const init = { count: 0, todo: [] };

export const store = createStore(reducer, init);






//4
// actionTypes
// actions-> action creators
// reducer
// store